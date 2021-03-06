const mail = require("@sendgrid/mail");
import { mailSchema } from "../../schemas/mail";

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const body = JSON.parse(req.body);

    if (body.phone !== "") {
      res.status(502).send({
        message:
          "Kunne ikke sende mail. Prøv venligst igen eller kontakt os på 66 10 65 00.",
      });
      return;
    }

    const message = `
    Navn: ${body.name} \r\n
    Virksomhed: ${body.virksomhed} \r\n
    Mail: ${body.email} \r\n
    Telefonnummer: ${body.telefon} \r\n
    Besked: ${body.description} \r\n
  `;

    const secretKey = process.env.SECRET_RECAPTCHA_KEY;
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${body.recaptcha}`;

    try {
      const recaptchaResponse = await fetch(verifyUrl, {
        method: "POST",
      });
      const parsedRecaptchaResponse = await recaptchaResponse.json();
      if (!parsedRecaptchaResponse.success || parsedRecaptchaResponse.score < 0.4) {
        throw new Error(
          "Kunne ikke sende mail. Prøv venligst igen eller kontakt os på 66 10 65 00."
        );
      }

      await mailSchema.validate(req.body);

      await mail.send({
        to: "job@go-work.dk",
        from: "kontakt@go-work.dk",
        subject: `Mail sendt gennem hjemmesiden. Afsender: ${body.email}`,
        text: message,
        html: message.replace(/\r\n/g, "<br>"),
      });
      res.status(200).json({ message: "success" });
    } catch (error) {
      res.status(error.code ?? 502).send({
        message:
          error.message ??
          "Kunne ikke sende mail. Prøv venligst igen eller kontakt os på 66 10 65 00.",
      });
    }
  }
}
