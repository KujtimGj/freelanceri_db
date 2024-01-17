const nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "platforma.freelanceri@gmail.com",
    pass: "aueb kate jlxl jwaw",
  },
});


const sendCompletionEmail = async (recipientEmail) => {
  var mailOptions = {
    from: "platforma.freelanceri@gmail.com",
    to: recipientEmail,
    subject: "Mirë se vini në Freelanceri",

    html: `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<!--[if gte mso 9]>
<xml>
  <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
  </o:OfficeDocumentSettings>
</xml>
<![endif]-->
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="x-apple-disable-message-reformatting">
  <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
  <title></title>
  
    <style type="text/css">
      @media only screen and (min-width: 570px) {
  .u-row {
    width: 550px !important;
  }
  .u-row .u-col {
    vertical-align: top;
  }

  .u-row .u-col-100 {
    width: 550px !important;
  }

}

@media (max-width: 570px) {
  .u-row-container {
    max-width: 100% !important;
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
  .u-row .u-col {
    min-width: 320px !important;
    max-width: 100% !important;
    display: block !important;
  }
  .u-row {
    width: 100% !important;
  }
  .u-col {
    width: 100% !important;
  }
  .u-col > div {
    margin: 0 auto;
  }
}
body {
  margin: 0;
  padding: 0;
}

table,
tr,
td {
  vertical-align: top;
  border-collapse: collapse;
}

p {
  margin: 0;
}

.ie-container table,
.mso-container table {
  table-layout: fixed;
}

* {
  line-height: inherit;
}

a[x-apple-data-detectors='true'] {
  color: inherit !important;
  text-decoration: none !important;
}

table, td { color: #000000; } #u_body a { color: #0000ee; text-decoration: underline; }
    </style>
  
  

<!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet" type="text/css"><link href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap" rel="stylesheet" type="text/css"><link href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap" rel="stylesheet" type="text/css"><!--<![endif]-->

</head>

<body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #e0e5eb;color: #000000">
  <!--[if IE]><div class="ie-container"><![endif]-->
  <!--[if mso]><div class="mso-container"><![endif]-->
  <table id="u_body" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #e0e5eb;width:100%" cellpadding="0" cellspacing="0">
  <tbody>
  <tr style="vertical-align: top">
    <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e0e5eb;"><![endif]-->
    
  
  
<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 550px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:550px;"><tr style="background-color: transparent;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="550" style="width: 550px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 550px;display: table-cell;vertical-align: top;">
  <div style="height: 100%;width: 100% !important;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
  
<table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Lato',sans-serif;" align="left">
        
  <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 0px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
    <tbody>
      <tr style="vertical-align: top">
        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
          <span>&#160;</span>
        </td>
      </tr>
    </tbody>
  </table>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
  </div>
  


  
  
<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 550px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #d5827c;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:550px;"><tr style="background-color: #d5827c;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="550" style="background-color: #ffffff;width: 550px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 550px;display: table-cell;vertical-align: top;">
  <div style="background-color: #ffffff;height: 100%;width: 100% !important;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
  
<table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:34px;font-family:'Lato',sans-serif;" align="left">
        
<table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
    <td style="padding-right: 0px;padding-left: 0px;" align="center">
      
      <img align="center" border="0" src="https://i.ibb.co/CPKDJTz/image-4.png" alt="" title="" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 200px;" width="200"/>
      
    </td>
  </tr>
</table>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
  </div>
  


  
  
<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 550px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #d5827c;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:550px;"><tr style="background-color: #d5827c;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="550" style="background-color: #455bef;width: 550px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 550px;display: table-cell;vertical-align: top;">
  <div style="background-color: #455bef;height: 100%;width: 100% !important;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
  
<table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:33px 10px 11px;font-family:'Lato',sans-serif;" align="left">
        
  <!--[if mso]><table width="100%"><tr><td><![endif]-->
    <h1 style="margin: 0px; color: #ffffff; line-height: 50%; text-align: center; word-wrap: break-word; font-family: 'Montserrat',sans-serif; font-size: 32px; font-weight: 700;"><span><span style="line-height: 16px;"><span style="line-height: 16px;"><span style="line-height: 16px;"><span style="line-height: 16px;"><span style="line-height: 16px;"><span style="line-height: 16px;"><span style="line-height: 16px;"><span style="line-height: 16px;"><span style="line-height: 16px;"><span style="line-height: 16px;"><span style="line-height: 16px;">Miresevini</span></span></span></span></span></span></span></span></span></span></span></span></h1>
  <!--[if mso]></td></tr></table><![endif]-->

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 24px;font-family:'Lato',sans-serif;" align="left">
        
  <!--[if mso]><table width="100%"><tr><td><![endif]-->
    <h3 style="margin: 0px; color: #ffffff; line-height: 140%; text-align: center; word-wrap: break-word; font-family: 'Montserrat',sans-serif; font-size: 18px; font-weight: 400;"><span><span><span style="line-height: 25.2px;"><span style="line-height: 25.2px;"><span style="line-height: 25.2px;"><span style="line-height: 25.2px;">në platformen Freelanceri</span></span></span></span></span></span></h3>
  <!--[if mso]></td></tr></table><![endif]-->

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
  </div>
  


  
  
<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 550px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #d5827c;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:550px;"><tr style="background-color: #d5827c;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="550" style="background-color: #ffffff;width: 550px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 550px;display: table-cell;vertical-align: top;">
  <div style="background-color: #ffffff;height: 100%;width: 100% !important;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
  
<table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:25px 40px 13px;font-family:'Lato',sans-serif;" align="left">
        
  <div style="font-size: 14px; color: #4b4a4a; line-height: 140%; text-align: center; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 140%;"><span data-metadata="&lt;!--(figmeta)eyJmaWxlS2V5IjoieHdrUzVsN0RYeFJGYXpIZjBLQzY4cCIsInBhc3RlSUQiOjc3MjU1NjU3MCwiZGF0YVR5cGUiOiJzY2VuZSJ9Cg==(/figmeta)--&gt;" style="line-height: 19.6px;"></span><span data-buffer="&lt;!--(figma)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(/figma)--&gt;" style="line-height: 19.6px;"></span><span style="line-height: 16.8px; font-family: Montserrat, sans-serif; font-size: 12px;">Kjo është mundësi e shkëlqyeshme për të eksploruar dhe përfituar nga të gjitha mjetet dhe mundësitë që ofron platforma jonë e punës freelance. Në 3 muajt e parë të lancimit, ju do keni akses të plotë dhe të lirë për të shfrytëzuar të gjitha avantazhet dhe funksionet e platformës tonë.</span></p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
  </div>
  


  
  
<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 550px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:550px;"><tr style="background-color: transparent;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="550" style="background-color: #ffffff;width: 550px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 550px;display: table-cell;vertical-align: top;">
  <div style="background-color: #ffffff;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;"><!--<![endif]-->
  
<table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:9px;font-family:'Lato',sans-serif;" align="left">
        
  <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="79%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #455bef;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
    <tbody>
      <tr style="vertical-align: top">
        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
          <span>&#160;</span>
        </td>
      </tr>
    </tbody>
  </table>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
  </div>
  


  
  
<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 550px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #d5827c;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:550px;"><tr style="background-color: #d5827c;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="550" style="background-color: #ffffff;width: 550px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 550px;display: table-cell;vertical-align: top;">
  <div style="background-color: #ffffff;height: 100%;width: 100% !important;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
  
<table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:8px 40px 20px;font-family:'Lato',sans-serif;" align="left">
        
  <div style="font-size: 14px; color: #4b4a4a; line-height: 140%; text-align: center; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 140%;"><span style="line-height: 19.6px;" data-metadata="&lt;!--(figmeta)eyJmaWxlS2V5IjoieHdrUzVsN0RYeFJGYXpIZjBLQzY4cCIsInBhc3RlSUQiOjc3MjU1NjU3MCwiZGF0YVR5cGUiOiJzY2VuZSJ9Cg==(/figmeta)--&gt;"></span><span style="line-height: 19.6px;" data-metadata="&lt;!--(figmeta)eyJmaWxlS2V5IjoieHdrUzVsN0RYeFJGYXpIZjBLQzY4cCIsInBhc3RlSUQiOjE3MDM0NjE3NDYsImRhdGFUeXBlIjoic2NlbmUifQo=(/figmeta)--&gt;"></span><span style="line-height: 19.6px;" data-buffer="&lt;!--(figma)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(/figma)--&gt;"></span><span style="font-family: Montserrat, sans-serif; line-height: 16.8px; font-size: 12px;"><span style="line-height: 19.6px;">Ne jemi të lumtur që ju kemi në komunitetin tonë dhe shpresojmë që do të gjeni shumë mundësi të sukseshme dhe projekte interesante<br />për të punuar gjatë kësaj periudhe prove. Ju inkurajojmë të eksploroni dhe të përdorni çdo aspekt të platformës sonë për të ndërtuar<br />një karrierë të suksesshme freelance.</span> </span></p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
  </div>
  


  
  
<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 550px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:550px;"><tr style="background-color: #ffffff;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="550" style="width: 550px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 550px;display: table-cell;vertical-align: top;">
  <div style="height: 100%;width: 100% !important;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
  
<table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:19px 10px;font-family:'Lato',sans-serif;" align="left">
        
<div align="center">
  <div style="display: table; max-width:125px;">
  <!--[if (mso)|(IE)]><table width="125" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-collapse:collapse;" align="center"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; mso-table-lspace: 0pt;mso-table-rspace: 0pt; width:125px;"><tr><![endif]-->
  
    
    <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 10px;" valign="top"><![endif]-->
    <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="width: 32px !important;height: 32px !important;display: inline-block;border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 10px">
      <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
        <a href="https://www.facebook.com/platforma.freelanceri" title="Facebook" target="_blank">
          <img src="https://i.ibb.co/k4Bw2zP/image-1.png" alt="Facebook" title="Facebook" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
        </a>
      </td></tr>
    </tbody></table>
    <!--[if (mso)|(IE)]></td><![endif]-->
    
    <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 10px;" valign="top"><![endif]-->
    <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="width: 32px !important;height: 32px !important;display: inline-block;border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 10px">
      <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
        <a href="https://www.linkedin.com/company/freelanceriapp/" title="LinkedIn" target="_blank">
          <img src="https://i.ibb.co/hBBBB6m/image-2.png" alt="LinkedIn" title="LinkedIn" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
        </a>
      </td></tr>
    </tbody></table>
    <!--[if (mso)|(IE)]></td><![endif]-->
    
    <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 0px;" valign="top"><![endif]-->
    <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="width: 32px !important;height: 32px !important;display: inline-block;border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 0px">
      <tbody><tr style="vertical-align: top"><td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
        <a href="https://instagram.com/freelanceri.app" title="Instagram" target="_blank">
          <img src="https://i.ibb.co/pwFFHnV/image-3.png" alt="Instagram" title="Instagram" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
        </a>
      </td></tr>
    </tbody></table>
    <!--[if (mso)|(IE)]></td><![endif]-->
    
    
    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
  </div>
</div>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
  </div>
  


  
  
<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="margin: 0 auto;min-width: 320px;max-width: 550px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
    <div style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:550px;"><tr style="background-color: #ffffff;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="550" style="width: 550px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 550px;display: table-cell;vertical-align: top;">
  <div style="height: 100%;width: 100% !important;">
  <!--[if (!mso)&(!IE)]><!--><div style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
  
<table style="font-family:'Lato',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:12px 10px 15px;font-family:'Lato',sans-serif;" align="left">
        
  <div style="font-size: 14px; color: #7e8c8d; line-height: 140%; text-align: center; word-wrap: break-word;">
    <p style="font-size: 14px; line-height: 140%;">© 2024 Freelanceri. All Rights Reserved.</p>
  </div>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
  </div>
  


    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
    </td>
  </tr>
  </tbody>
  </table>
  <!--[if mso]></div><![endif]-->
  <!--[if IE]></div><![endif]-->
</body>

</html>
`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: ", info.response);
  } catch (error) {
    console.error("Error sending email: ", error);
  }
};

module.exports =sendCompletionEmail;
