const qrcode = require('qrcode');
const qrcodegenrate = (req,res) => {
    const data = req.body.data 
    qrcode.toDataURL(data, (err, url) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error generating QR code');
      }
      res.json({ qrCodeUrl: url });
    });

}
module.exports=qrcodegenrate;