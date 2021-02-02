const router = require("express").Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../auth");
const nodemailer = require("nodemailer");

//REGISTER

router.post("/register", async (req, res) => {
  try {
    let {
      displayName,
      docuId,
      lastName,
      email,
      password,
      passwordCheck,
      temperature,
      sugarLevel,
      pressure,
      weight,
    } = req.body;

    //Validation

    //encrypting password
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    let currentDate = new Date();
    currentDate.setHours(currentDate.getHours() - 5);

    const newUser = new User({
      lastName,
      docuId,
      email,
      password: passwordHash,
      displayName,
      temperature,
      sugarLevel,
      pressure,
      weight,
      historicWeight: [{ weight: weight, date: currentDate }],
      historicPressure: [{ pressure: pressure, date: currentDate }],
      historicSugarLevel: [{ sugarLevel: sugarLevel, date: currentDate }],
      historicTemperature: [{ temperature: temperature, date: currentDate }],
    });
    await newUser.save();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "medicinaparatodos.custom@gmail.com",
        pass: "proyectofinal123",
      },
    });

    jwt.sign(
      {
        user: {
          id: newUser.id,
        },
      },
      process.env.JWT_SECRET,
      {
        expiresIn: 360000,
      },
      async (err, token) => {
        res.json({ token });
        const url = `http://localhost:3001/confirmation/${token}`;
        const output = `
          <h2>Haz clic en el siguiente link para activar tu cuenta</h2>
          <p>http://localhost:3001/confirmation/${token}</p>
          <p><b>NOTA: </b> El link expira en 30 minutos.</p>
          `;
        try {
          await transporter.sendMail({
            to: email,
            subject: "Confirma tu cuenta",
            html: output,
          });
          console.log(email);
        } catch (e) {
          console.log(e);
        }
      }
    );

    //Send confirmation email

    // send mail with defined transport object
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//LOGIN

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(email);

  // Validation
  if (!email || !password)
    return res.status(400).json({ msg: "faltan campos por llenar" });
  try {
    const user = await User.findOne({ email: email });

    if (!user)
      return res
        .status(400)
        .json({ msg: "No se encuentra registrada esta cuenta" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Contraseña incorrecta" });

    const isVerified = user.verified;
    if (!isVerified && isMatch) {
      return res
        .status(400)
        .json({ msg: "No se encuentra verificada esta cuenta" });
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//To check if token is valid-tells if we are logged in

router.post("/tokenIsValid", async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);

    const user = await User.findById(verified.id);
    if (!user) return res.json(false);

    return res.json(true);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", auth, async (req, res) => {
  const user = await User.findById(req.user);
  res.json({
    displayName: user.displayName,
    id: user._id,
  });
});

//UPDATE STATE

router.post("/updatestate", async (req, res) => {
  const { temperature, sugarLevel, pressure, weight, oxygenSat } = req.body;
});

module.exports = router;
