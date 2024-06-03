const nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "platforma.freelanceri@gmail.com",
    pass: "aueb kate jlxl jwaw",
    name: "Freelanceri",
  },
});

const sendHomeEmail = async (recEmail) => {
  let fromE = "Freelanceri <platforma.freelanceri@gmail.com>";
  var mailOptions = {
    name: "Freelanceri",
    from: fromE,
    to: recEmail,
    subject: "Introducing Freelanceri.",
    html: `<!DOCTYPE html>
  <html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
  
  <head>
      <title></title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]--><!--[if !mso]><!-->
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900" rel="stylesheet" type="text/css"><!--<![endif]-->
      <style>
          * {
              box-sizing: border-box;
          }
  
          body {
              margin: 0;
              padding: 0;
          }
  
          a[x-apple-data-detectors] {
              color: inherit !important;
              text-decoration: inherit !important;
          }
  
          #MessageViewBody a {
              color: inherit;
              text-decoration: none;
          }
  
          p {
              line-height: inherit
          }
  
          .desktop_hide,
          .desktop_hide table {
              mso-hide: all;
              display: none;
              max-height: 0px;
              overflow: hidden;
          }
  
          .image_block img+div {
              display: none;
          }
  
          #converted-body .list_block ul,
          #converted-body .list_block ol,
          .body [class~="x_list_block"] ul,
          .body [class~="x_list_block"] ol,
          u+.body .list_block ul,
          u+.body .list_block ol {
              padding-left: 20px;
          }
  
          .menu_block.desktop_hide .menu-links span {
              mso-hide: all;
          }
  
          @media (max-width:740px) {
  
              .desktop_hide table.icons-inner,
              .social_block.desktop_hide .social-table {
                  display: inline-block !important;
              }
  
              .icons-inner {
                  text-align: center;
              }
  
              .icons-inner td {
                  margin: 0 auto;
              }
  
              .image_block div.fullWidth {
                  max-width: 100% !important;
              }
  
              .menu-checkbox[type=checkbox]~.menu-links {
                  display: none !important;
                  padding: 5px 0;
              }
  
              .menu-checkbox[type=checkbox]:checked~.menu-trigger .menu-open {
                  display: none !important;
              }
  
              .menu-checkbox[type=checkbox]:checked~.menu-links,
              .menu-checkbox[type=checkbox]~.menu-trigger {
                  display: block !important;
                  max-width: none !important;
                  max-height: none !important;
                  font-size: inherit !important;
              }
  
              .menu-checkbox[type=checkbox]~.menu-links>a,
              .menu-checkbox[type=checkbox]~.menu-links>span.label {
                  display: block !important;
                  text-align: center;
              }
  
              .menu-checkbox[type=checkbox]:checked~.menu-trigger .menu-close {
                  display: block !important;
              }
  
              .mobile_hide {
                  display: none;
              }
  
              .row-content {
                  width: 100% !important;
              }
  
              .stack .column {
                  width: 100%;
                  display: block;
              }
  
              .mobile_hide {
                  min-height: 0;
                  max-height: 0;
                  max-width: 0;
                  overflow: hidden;
                  font-size: 0px;
              }
  
              .desktop_hide,
              .desktop_hide table {
                  display: table !important;
                  max-height: none !important;
              }
          }
  
          #memu-r1c1m1:checked~.menu-links {
              background-color: #00d09c !important;
          }
  
          #memu-r1c1m1:checked~.menu-links a,
          #memu-r1c1m1:checked~.menu-links span {
              color: #ffffff !important;
          }
      </style>
  </head>
  
  <body class="body" style="margin: 0; background-color: #ffffff; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
      <table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;">
          <tbody>
              <tr>
                  <td>
                      <table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                          <tbody>
                              <tr>
                                  <td>
                                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 720px; margin: 0 auto;" width="720">
                                          <tbody>
                                              <tr>
                                                  <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                      <div class="spacer_block block-1" style="height:25px;line-height:25px;font-size:1px;">&#8202;</div>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                          <tbody>
                              <tr>
                                  <td>
                                      <table class="row-content" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 720px; margin: 0 auto;" width="720">
                                          <tbody>
                                              <tr>
                                                  <td class="column column-1" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                      <table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                          <tr>
                                                              <td class="pad" style="padding-left:25px;padding-top:10px;width:100%;padding-right:0px;">
                                                                  <div class="alignment" align="left" style="line-height:10px">
                                                                      <div style="max-width: 180px;"><img src="https://2d5aca1f06.imgdist.com/pub/bfra/l01rmgju/7l9/5xt/8to/Group-1-3.png" style="display: block; height: auto; border: 0; width: 100%;" width="180" alt="Alternate text" title="Alternate text" height="auto"></div>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                                  <td class="column column-2" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                      <div class="spacer_block block-1" style="height:20px;line-height:20px;font-size:1px;">&#8202;</div>
                                                      <table class="menu_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                          <tr>
                                                              <td class="pad" style="color:#393d47;font-family:inherit;font-size:16px;padding-right:20px;text-align:right;">
                                                                  <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                      <tr>
                                                                          <td class="alignment" style="text-align:right;font-size:0px;"><!--[if !mso]><!--><input class="menu-checkbox" id="memu-r1c1m1" type="checkbox" style="display:none !important;max-height:0;visibility:hidden;"><!--<![endif]-->
                                                                              <div class="menu-trigger" style="display:none;max-height:0px;max-width:0px;font-size:0px;overflow:hidden;"><label class="menu-label" for="memu-r1c1m1" style="height: 36px; width: 36px; display: inline-block; cursor: pointer; mso-hide: all; user-select: none; align: right; text-align: center; color: #ffffff; text-decoration: none; background-color: #00d09c; border-radius: 50%;"><span class="menu-open" style="mso-hide:all;font-size:26px;line-height:31.5px;">☰</span><span class="menu-close" style="display:none;mso-hide:all;font-size:26px;line-height:36px;">✕</span></label></div>
                                                                              <div class="menu-links"><!--[if mso]><table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center" style=""><tr style="text-align:right;"><![endif]--><!--[if mso]><td style="padding-top:5px;padding-right:20px;padding-bottom:5px;padding-left:15px"><![endif]--><a href="https://www.freelanceri-ks.com/" target="_self" style="mso-hide:false;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:20px;display:inline-block;color:#393d47;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:16px;text-decoration:none;letter-spacing:normal;">Home</a><!--[if mso]></td><![endif]--><!--[if mso]><td style="padding-top:5px;padding-right:20px;padding-bottom:5px;padding-left:15px"><![endif]--><a href="https://www.freelanceri-ks.com/login" target="_self" style="mso-hide:false;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:20px;display:inline-block;color:#393d47;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:16px;text-decoration:none;letter-spacing:normal;">Log in</a><!--[if mso]></td><![endif]--><!--[if mso]><td style="padding-top:5px;padding-right:20px;padding-bottom:5px;padding-left:15px"><![endif]--><a href="https://www.freelanceri-ks.com/regsiter" target="_self" style="mso-hide:false;padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:20px;display:inline-block;color:#393d47;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:16px;text-decoration:none;letter-spacing:normal;">Register</a><!--[if mso]></td><![endif]--><!--[if mso]></tr></table><![endif]--></div>
                                                                          </td>
                                                                      </tr>
                                                                  </table>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                      <div class="spacer_block block-3" style="height:25px;line-height:25px;font-size:1px;">&#8202;</div>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;">
                          <tbody>
                              <tr>
                                  <td>
                                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; background-position: top center; color: #000000; width: 720px; margin: 0 auto;" width="720">
                                          <tbody>
                                              <tr>
                                                  <td class="column column-1" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                      <div class="spacer_block block-1" style="height:30px;line-height:30px;font-size:1px;">&#8202;</div>
                                                      <table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                          <tr>
                                                              <td class="pad" style="padding-bottom:10px;padding-left:25px;padding-right:25px;padding-top:10px;">
                                                                  <div style="color:#1f0b0b;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:38px;line-height:120%;text-align:left;mso-line-height-alt:45.6px;">
                                                                      <p style="margin: 0; word-break: break-word;"><span><strong><span>We're happy</span></strong></span></p>
                                                                      <p style="margin: 0; word-break: break-word;"><span><strong><span>you're here.</span></strong></span></p>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                      <table class="paragraph_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                          <tr>
                                                              <td class="pad" style="padding-bottom:25px;padding-left:25px;padding-right:25px;padding-top:10px;">
                                                                  <div style="color:#393d47;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:14px;line-height:180%;text-align:left;mso-line-height-alt:25.2px;">
                                                                      <p style="margin: 0; word-break: break-word;">Dive deep into the opportunities Freelanceri gives to professionals and businesses!</p>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                      <table class="button_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                          <tr>
                                                              <td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:10px;padding-top:10px;text-align:left;">
                                                                  <div class="alignment" align="left"><!--[if mso]>
  <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="height:52px;width:264px;v-text-anchor:middle;" arcsize="8%" stroke="false" fillcolor="#455bef">
  <w:anchorlock/>
  <v:textbox inset="5px,0px,0px,0px">
  <center dir="false" style="color:#ffffff;font-family:Tahoma, sans-serif;font-size:16px">
  <![endif]-->
                                                                      <div style="background-color:#455bef;border-bottom:0px solid #8a3b8f;border-left:0px solid #8a3b8f;border-radius:4px;border-right:0px solid #8a3b8f;border-top:0px solid #8a3b8f;color:#ffffff;display:inline-block;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:16px;font-weight:undefined;mso-border-alt:none;padding-bottom:10px;padding-top:10px;text-align:center;text-decoration:none;width:auto;word-break:keep-all;"><span style="padding-left:50px;padding-right:45px;font-size:16px;display:inline-block;letter-spacing:normal;"><span style="word-break: break-word; line-height: 32px;"><strong>Create your account</strong></span></span></div><!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                                  <td class="column column-2" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                      <div class="spacer_block block-1" style="height:20px;line-height:20px;font-size:1px;">&#8202;</div>
                                                      <table class="image_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                          <tr>
                                                              <td class="pad" style="padding-right:5px;width:100%;">
                                                                  <div class="alignment" align="center" style="line-height:10px">
                                                                      <div style="max-width: 355px;"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/1831/first_imag.png" style="display: block; height: auto; border: 0; width: 100%;" width="355" alt="Alternate text" title="Alternate text" height="auto"></div>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                      <div class="spacer_block block-3" style="height:40px;line-height:40px;font-size:1px;">&#8202;</div>
                                                      <div class="spacer_block block-4 mobile_hide" style="height:40px;line-height:40px;font-size:1px;">&#8202;</div>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table class="row row-4" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #455bef;">
                          <tbody>
                              <tr>
                                  <td>
                                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 720px; margin: 0 auto;" width="720">
                                          <tbody>
                                              <tr>
                                                  <td class="column column-1" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: middle; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                      <div class="spacer_block block-1" style="height:20px;line-height:20px;font-size:1px;">&#8202;</div>
                                                      <table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                          <tr>
                                                              <td class="pad" style="padding-bottom:10px;padding-left:35px;padding-right:35px;padding-top:5px;">
                                                                  <div style="color:#ffffff;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:20px;line-height:150%;text-align:center;mso-line-height-alt:30px;">
                                                                      <p style="margin: 0; word-break: break-word;"><span><strong><span>Trusted by important</span></strong></span></p>
                                                                      <p style="margin: 0; word-break: break-word;"><span><strong><span>partners</span></strong></span></p>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                                  <td class="column column-2" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: middle; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                      <table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                          <tr>
                                                              <td class="pad" style="padding-bottom:15px;padding-left:15px;padding-right:15px;width:100%;">
                                                                  <div class="alignment" align="center" style="line-height:10px">
                                                                      <div style="max-width: 330px;"><img src="https://2d5aca1f06.imgdist.com/pub/bfra/l01rmgju/bui/5x2/a4s/SUM.png" style="display: block; height: auto; border: 0; width: 100%;" width="330" alt="Alternate text" title="Alternate text" height="auto"></div>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                      <div class="spacer_block block-2" style="height:20px;line-height:20px;font-size:1px;">&#8202;</div>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table class="row row-5" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                          <tbody>
                              <tr>
                                  <td>
                                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 720px; margin: 0 auto;" width="720">
                                          <tbody>
                                              <tr>
                                                  <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                      <table class="empty_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                          <tr>
                                                              <td class="pad">
                                                                  <div></div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table class="row row-6" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; background-position: center top;">
                          <tbody>
                              <tr>
                                  <td>
                                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 720px; margin: 0 auto;" width="720">
                                          <tbody>
                                              <tr>
                                                  <td class="column column-1" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                      <table class="image_block block-1" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                          <tr>
                                                              <td class="pad">
                                                                  <div class="alignment" align="center" style="line-height:10px">
                                                                      <div class="fullWidth" style="max-width: 338.4px;"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/1831/Guy_computer.png" style="display: block; height: auto; border: 0; width: 100%;" width="338.4" alt="Alternate text" title="Alternate text" height="auto"></div>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                                  <td class="column column-2" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                      <div class="spacer_block block-1 mobile_hide" style="height:50px;line-height:50px;font-size:1px;">&#8202;</div>
                                                      <table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                          <tr>
                                                              <td class="pad" style="padding-bottom:10px;padding-left:25px;">
                                                                  <div style="color:#34495e;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:22px;line-height:200%;text-align:left;mso-line-height-alt:44px;">
                                                                      <p style="margin: 0; word-break: break-word;"><span><strong>How we help professionals?</strong></span></p>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                      <table class="list_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word; color: #555555; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; font-size: 14px; line-height: 200%; text-align: left; mso-line-height-alt: 28px;">
                                                          <tr>
                                                              <td class="pad" style="padding-bottom:5px;padding-left:45px;padding-right:25px;">
                                                                  <div style="margin-left:-20px">
                                                                      <ul style="margin-top: 0; margin-bottom: 0;">
                                                                          <li style="word-break: break-word; Margin: 0 0 0 0;">We do the job hunting for you</li>
                                                                          <li style="word-break: break-word; Margin: 0 0 0 0;">Job posts on our platform</li>
                                                                          <li style="word-break: break-word; Margin: 0 0 0 0;">Global market opportunities</li>
                                                                          <li style="word-break: break-word; Margin: 0 0 0 0;">Professional Development</li>
                                                                          <li style="word-break: break-word; Margin: 0 0 0 0;">Specialized Trainings</li>
                                                                      </ul>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                      <table class="button_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                          <tr>
                                                              <td class="pad" style="padding-bottom:10px;padding-left:25px;padding-right:10px;padding-top:10px;text-align:left;">
                                                                  <div class="alignment" align="left"><!--[if mso]>
  <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="www.freelanceri-ks.com/register" style="height:52px;width:190px;v-text-anchor:middle;" arcsize="8%" stroke="false" fillcolor="#455bef">
  <w:anchorlock/>
  <v:textbox inset="5px,0px,0px,0px">
  <center dir="false" style="color:#ffffff;font-family:Tahoma, sans-serif;font-size:16px">
  <![endif]--><a href="www.freelanceri-ks.com/register" target="_blank" style="background-color:#455bef;border-bottom:0px solid #8a3b8f;border-left:0px solid #8a3b8f;border-radius:4px;border-right:0px solid #8a3b8f;border-top:0px solid #8a3b8f;color:#ffffff;display:inline-block;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:16px;font-weight:undefined;mso-border-alt:none;padding-bottom:10px;padding-top:10px;text-align:center;text-decoration:none;width:auto;word-break:keep-all;"><span style="padding-left:50px;padding-right:45px;font-size:16px;display:inline-block;letter-spacing:normal;"><span style="word-break: break-word; line-height: 32px;"><strong>Get Started</strong></span></span></a><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table class="row row-7" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                          <tbody>
                              <tr>
                                  <td>
                                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 720px; margin: 0 auto;" width="720">
                                          <tbody>
                                              <tr>
                                                  <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                      <div class="spacer_block block-1" style="height:50px;line-height:50px;font-size:1px;">&#8202;</div>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table class="row row-8" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; background-image: url('https://d1oco4z2z1fhwp.cloudfront.net/templates/default/1831/Background_green.png'); background-repeat: no-repeat;">
                          <tbody>
                              <tr>
                                  <td>
                                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 720px; margin: 0 auto;" width="720">
                                          <tbody>
                                              <tr>
                                                  <td class="column column-1" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                      <div class="spacer_block block-1 mobile_hide" style="height:65px;line-height:65px;font-size:1px;">&#8202;</div>
                                                      <table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                          <tr>
                                                              <td class="pad" style="padding-bottom:10px;padding-left:25px;padding-right:25px;">
                                                                  <div style="color:#34495e;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:24px;line-height:200%;text-align:left;mso-line-height-alt:48px;">
                                                                      <p style="margin: 0; word-break: break-word;"><span><strong>For businesses</strong></span></p>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                      <table class="list_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word; color: #555555; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; font-size: 14px; line-height: 200%; text-align: left; mso-line-height-alt: 28px;">
                                                          <tr>
                                                              <td class="pad" style="padding-bottom:5px;padding-left:45px;padding-right:25px;">
                                                                  <div style="margin-left:-20px">
                                                                      <ul style="margin-top: 0; margin-bottom: 0;">
                                                                          <li style="Margin: 0 0 0 0;">Recruiting Services.</li>
                                                                          <li style="word-break: break-word; Margin: 0 0 0 0;">AI algorithms to find perfect profiles</li>
                                                                          <li style="word-break: break-word; Margin: 0 0 0 0;">Consulting Services</li>
                                                                          <li style="word-break: break-word; Margin: 0 0 0 0;">Project Management</li>
                                                                          <li style="word-break: break-word; Margin: 0 0 0 0;">Software Development</li>
                                                                          <li style="word-break: break-word; Margin: 0 0 0 0;">Xandidate AI services to evaluate candidates</li>
                                                                      </ul>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                      <table class="button_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                          <tr>
                                                              <td class="pad" style="padding-bottom:10px;padding-left:25px;padding-right:10px;padding-top:10px;text-align:left;">
                                                                  <div class="alignment" align="left"><!--[if mso]>
  <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="www.freelanceri-ks.com/register" style="height:52px;width:190px;v-text-anchor:middle;" arcsize="8%" stroke="false" fillcolor="#455bef">
  <w:anchorlock/>
  <v:textbox inset="5px,0px,0px,0px">
  <center dir="false" style="color:#ffffff;font-family:Tahoma, sans-serif;font-size:16px">
  <![endif]--><a href="www.freelanceri-ks.com/register" target="_blank" style="background-color:#455bef;border-bottom:0px solid #8a3b8f;border-left:0px solid #8a3b8f;border-radius:4px;border-right:0px solid #8a3b8f;border-top:0px solid #8a3b8f;color:#ffffff;display:inline-block;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:16px;font-weight:undefined;mso-border-alt:none;padding-bottom:10px;padding-top:10px;text-align:center;text-decoration:none;width:auto;word-break:keep-all;"><span style="padding-left:50px;padding-right:45px;font-size:16px;display:inline-block;letter-spacing:normal;"><span style="word-break: break-word; line-height: 32px;"><strong>Get Started</strong></span></span></a><!--[if mso]></center></v:textbox></v:roundrect><![endif]--></div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                      <div class="spacer_block block-5" style="height:35px;line-height:35px;font-size:1px;">&#8202;</div>
                                                  </td>
                                                  <td class="column column-2" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                      <div class="spacer_block block-1 mobile_hide" style="height:55px;line-height:55px;font-size:1px;">&#8202;</div>
                                                      <table class="image_block block-2" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                          <tr>
                                                              <td class="pad">
                                                                  <div class="alignment" align="center" style="line-height:10px">
                                                                      <div class="fullWidth" style="max-width: 338.4px;"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/1831/Guy_texting.png" style="display: block; height: auto; border: 0; width: 100%;" width="338.4" alt="Alternate text" title="Alternate text" height="auto"></div>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table class="row row-9" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;">
                          <tbody>
                              <tr>
                                  <td>
                                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 720px; margin: 0 auto;" width="720">
                                          <tbody>
                                              <tr>
                                                  <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                      <div class="spacer_block block-1" style="height:30px;line-height:30px;font-size:1px;">&#8202;</div>
                                                      <div class="spacer_block block-2" style="height:45px;line-height:45px;font-size:1px;">&#8202;</div>
                                                      <table class="paragraph_block block-3" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                          <tr>
                                                              <td class="pad" style="padding-bottom:10px;padding-left:35px;padding-right:35px;padding-top:5px;">
                                                                  <div style="color:#34495e;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:24px;line-height:150%;text-align:center;mso-line-height-alt:36px;">
                                                                      <p style="margin: 0; word-break: break-word;"><strong><span>Manage your recruitment&nbsp; from your hand.</span></strong></p>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                      <table class="paragraph_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                          <tr>
                                                              <td class="pad" style="padding-bottom:25px;padding-left:25px;padding-right:25px;padding-top:10px;">
                                                                  <div style="color:#393d47;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:14px;line-height:180%;text-align:center;mso-line-height-alt:25.2px;">
                                                                      <p style="margin: 0; word-break: break-word;">Digital and all-encompassing recruitment services tailored to your needs</p>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table class="row row-10" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;">
                          <tbody>
                              <tr>
                                  <td>
                                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 720px; margin: 0 auto;" width="720">
                                          <tbody>
                                              <tr>
                                                  <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                      <div class="spacer_block block-1" style="height:55px;line-height:55px;font-size:1px;">&#8202;</div>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table class="row row-11" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;">
                          <tbody>
                              <tr>
                                  <td>
                                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 720px; margin: 0 auto;" width="720">
                                          <tbody>
                                              <tr>
                                                  <td class="column column-1" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                      <table class="paragraph_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                          <tr>
                                                              <td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:10px;padding-top:10px;">
                                                                  <div style="color:#455bef;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:16px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
                                                                      <p style="margin: 0; word-break: break-word;"><strong>&nbsp;Quick Links</strong></p>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                      <table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                          <tr>
                                                              <td class="pad" style="padding-bottom:10px;padding-left:20px;padding-right:10px;padding-top:10px;">
                                                                  <div style="color:#393d47;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:14px;line-height:180%;text-align:left;mso-line-height-alt:25.2px;">
                                                                      <p style="margin: 0; word-break: break-word;">Blogs</p>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                                  <td class="column column-2" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                      <table class="paragraph_block block-1" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                          <tr>
                                                              <td class="pad">
                                                                  <div style="color:#455bef;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:16px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
                                                                      <p style="margin: 0; word-break: break-word;"><strong>Contact Info</strong></p>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                      <table class="paragraph_block block-2" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                          <tr>
                                                              <td class="pad">
                                                                  <div style="color:#393d47;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:14px;line-height:180%;text-align:left;mso-line-height-alt:25.2px;">
                                                                      <p style="margin: 0; word-break: break-word;">+383 45 296 605</p>
                                                                      <p style="margin: 0; word-break: break-word;">platforma.freelanceri@gmail.com</p>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                                  <td class="column column-3" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                      <table class="paragraph_block block-1" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                          <tr>
                                                              <td class="pad">
                                                                  <div style="color:#455bef;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:16px;line-height:120%;text-align:left;mso-line-height-alt:19.2px;">
                                                                      <p style="margin: 0; word-break: break-word;"><strong>Freelanceri</strong></p>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                      <table class="paragraph_block block-2" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                          <tr>
                                                              <td class="pad">
                                                                  <div style="color:#393d47;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:14px;line-height:180%;text-align:left;mso-line-height-alt:25.2px;">
                                                                      <p style="margin: 0; word-break: break-word;">Having AI boost your business and professional development.</p>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                      <table class="social_block block-3" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                          <tr>
                                                              <td class="pad">
                                                                  <div class="alignment" align="left">
                                                                      <table class="social-table" width="108px" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;">
                                                                          <tr>
                                                                              <td style="padding:0 4px 0 0;"><a href="https://www.linkedin.com/company/freelanceriapp" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-dark-gray/linkedin@2x.png" width="32" height="auto" alt="LinkedIn" title="LinkedIn" style="display: block; height: auto; border: 0;"></a></td>
                                                                              <td style="padding:0 4px 0 0;"><a href="https://www.facebook.com" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-dark-gray/facebook@2x.png" width="32" height="auto" alt="Facebook" title="Facebook" style="display: block; height: auto; border: 0;"></a></td>
                                                                              <td style="padding:0 4px 0 0;"><a href="https://www.instagram.com" target="_blank"><img src="https://app-rsrc.getbee.io/public/resources/social-networks-icon-sets/t-only-logo-dark-gray/instagram@2x.png" width="32" height="auto" alt="Instagram" title="Instagram" style="display: block; height: auto; border: 0;"></a></td>
                                                                          </tr>
                                                                      </table>
                                                                  </div>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table class="row row-12" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;">
                          <tbody>
                              <tr>
                                  <td>
                                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 720px; margin: 0 auto;" width="720">
                                          <tbody>
                                              <tr>
                                                  <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                      <div class="spacer_block block-1" style="height:55px;line-height:55px;font-size:1px;">&#8202;</div>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                      <table class="row row-13" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;">
                          <tbody>
                              <tr>
                                  <td>
                                      <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; background-color: #ffffff; width: 720px; margin: 0 auto;" width="720">
                                          <tbody>
                                              <tr>
                                                  <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                      <table class="icons_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: center;">
                                                          <tr>
                                                              <td class="pad" style="vertical-align: middle; color: #1e0e4b; font-family: 'Inter', sans-serif; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
                                                                  <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                      <tr>
                                                                          <td class="alignment" style="vertical-align: middle; text-align: center;"><!--[if vml]><table align="center" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
                                                                              <!--[if !vml]><!-->
                                                                              <table class="icons-inner" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;" cellpadding="0" cellspacing="0" role="presentation"><!--<![endif]-->
                                                                                  <tr>
                                                                                      <td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 6px;"><a href="http://designedwithbeefree.com/" target="_blank" style="text-decoration: none;"><img class="icon" alt="Beefree Logo" src="https://d1oco4z2z1fhwp.cloudfront.net/assets/Beefree-logo.png" height="auto" width="34" align="center" style="display: block; height: auto; margin: 0 auto; border: 0;"></a></td>
                                                                                      <td style="font-family: 'Inter', sans-serif; font-size: 15px; font-weight: undefined; color: #1e0e4b; vertical-align: middle; letter-spacing: undefined; text-align: center;"><a href="http://designedwithbeefree.com/" target="_blank" style="color: #1e0e4b; text-decoration: none;">Designed with Beefree</a></td>
                                                                                  </tr>
                                                                              </table>
                                                                          </td>
                                                                      </tr>
                                                                  </table>
                                                              </td>
                                                          </tr>
                                                      </table>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </td>
              </tr>
          </tbody>
      </table><!-- End -->
  </body>
  
  </html>`,
  };
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: ", info.response);
  } catch (error) {
    console.error("Error sending email: ", error);
  }
};

module.exports = sendHomeEmail;
