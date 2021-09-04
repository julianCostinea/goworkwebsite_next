import { resolveHref } from "next/dist/next-server/lib/router/router";

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
    Mail: ${body.email} \r\n
    Telefonnummer: ${body.telefon} \r\n
    Besked: ${body.description} \r\n
  `;

    const secretKey = process.env.SECRET_RECAPTCHA_KEY; 
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${body.recaptcha}`;

    const recaptchaResponse = await fetch(
      verifyUrl,
      {
        method: "POST",
      }
    );
    const parsedRecaptchaResponse = await recaptchaResponse.json();
    console.log("RESPONSE FROM CAPTCHA:", parsedRecaptchaResponse);

    return;

    try {
      await mailSchema.validate(req.body);

      await mail.send({
        to: "julian@go-work.dk",
        from: "kontakt@go-work.dk",
        subject: `Mail sendt gennem hjemmesiden. Afsender: ${body.email}`,
        text: message,
        html: message.replace(/\r\n/g, "<br>"),
      });
      res.status(200).json({ message: "success" });
    } catch (error) {
      console.log(error);
      res.status(error.code ?? 502).send({
        message:
          error.message ??
          "Kunne ikke sende mail. Prøv venligst igen eller kontakt os på 66 10 65 00.",
      });
    }
  }
}
