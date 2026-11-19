<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
   <!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
   <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
   <meta name="viewport" content="width=device-width">
   <!--[if !mso]><!-->
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <!--<![endif]-->
   <title>Email Template</title>
   <!--[if !mso]><!-->
   <link href="https://fonts.googleapis.com/css2?family=Inter" rel="stylesheet" type="text/css">
   <!--<![endif]-->
   <style type="text/css">
      body {
         margin: 0;
         padding: 0;
      }

      table,
      td,
      tr {
         vertical-align: top;
         border-collapse: collapse;
      }

      * {
         line-height: inherit;
      }

      a[x-apple-data-detectors=true] {
         color: inherit !important;
         text-decoration: none !important;
      }
   </style>
</head>
<body class="clean-body" style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #FFFFFF;">
<!--[if IE]><div class="ie-browser"><![endif]-->
<table class="nl-container" style="table-layout: fixed; vertical-align: top; min-width: 320px; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF; width: 100%;" cellpadding="0" cellspacing="0" role="presentation" width="100%" bgcolor="#FFFFFF" valign="top">
   <tbody>
   <tr style="vertical-align: top;" valign="top">
      <td style="word-break: break-word; vertical-align: top;" valign="top">
         <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:#FFFFFF"><![endif]-->
         <div style="background-color:#f5f5f5; padding-top: 30px;">
            <div class="block-grid " style="min-width: 320px; max-width: 600px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; margin: 0 auto; background-color: #ffffff;">
               <div style="border-collapse: collapse; display: table; width: 100%; background-color:#ffffff;">
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px"><tr class="layout-full-width" style="background-color: #ffffff"><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #ffffff; width:600px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                  <div class="col num12" style="display: table-cell; vertical-align: top; min-width: 320px; max-width: 600px;">
                     <div class="col_cont" style="width:100% !important;">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent;">
                           <!--<![endif]-->
                           <div class="img-container center autowidth" align="center" style="padding-right: 0px; padding-left: 0px;">
                              <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><![endif]-->
                              <img style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 100%; max-width: 600px; display: block;" width="600" class="center autowidth" align="center" border="0" src="{{ env('API_URL') }}/storage/logo-virturo.jpg" alt="Virturo Logo" />
                              <!--[if mso]></td></tr></table><![endif]-->
                           </div>
                           <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-top: 64px; padding-bottom: 48px; padding-right: 32px; padding-left: 32px; font-family: Arial, Inter, sans-serif"><![endif]-->
                           <div style="font-family: Inter, Arial, sans-serif; padding-top: 64px; padding-bottom: 48px; padding-right: 32px; padding-left: 32px;">
                              <p style="color: #292929; font-weight: 400; font-size: 14px; line-height: 1.2; margin: 0; text-align: center;">Welcome to Virturo! We’re excited to have you on board.</p>
                              <p style="color: #292929; font-weight: 400; font-size: 14px; line-height: 1.2; padding-bottom: 48px; margin: 0; text-align: center;">To activate your account, please enter the following 6-digit confirmation code on the website:</p>
                              <div style="color: #157275; text-align: center">
                                 @foreach(str_split($data['code']) as $code)
                                    <span style="display: inline-block; border: 1px solid #157275; border-radius: 8px; font-size: 14px; font-weight: 600; line-height: 17px; padding: 9px 14px;">{{ $code }}</span>
                                    @if($loop->iteration === 3)
                                       <span style="display: inline-block; background-color: #157275; width: 10px; height: 1px; border-radius: 8px; margin-bottom: 4px;"></span>
                                    @endif
                                 @endforeach
                              </div>
                           </div>
                           <!--[if mso]></td></tr></table><![endif]-->
                           <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 32px; padding-left: 32px; font-family: 'Inter', Arial, sans-serif;"><![endif]-->
                           <div style="font-family: 'Inter', Arial, sans-serif; padding-right: 32px; padding-left: 32px;">
                              <p style="color: #292929; font-size: 13px; font-weight: 400; line-height: 1.2; margin: 0; word-break: break-word; text-align: center;">Click the button below to enter your code</p>
                              <p style="color: #292929; font-size: 13px; font-weight: 400; line-height: 1.2; margin: 0; word-break: break-word; text-align: center;">and complete the activation</p>
                           </div>
                           <!--[if mso]></td></tr></table><![endif]-->
                           <div class="button-container" align="center" style="padding-top: 16px; padding-right: 32px; padding-bottom: 64px; padding-left:32px;">
                              <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;"><tr><td style="padding-top: 10px; padding-right: 10px; padding-bottom: 50px; padding-left: 10px" align="center"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="" style="height:25.5pt;width:215.25pt;v-text-anchor:middle;" arcsize="12%" strokeweight="0.75pt" strokecolor="#4FABEA" fillcolor="#4fabea"><w:anchorlock/><v:textbox inset="0,0,0,0"><center style="color:#ffffff; font-family: 'Inter', Arial, sans-serif; font-size:14px"><![endif]-->
                              <div style="display:inline-block; color: #D9D9D9; background-color: #352F44; border-radius: 8px; -webkit-border-radius: 8px; -moz-border-radius: 8px; width:auto; padding-top:0px; padding-bottom:0px; font-family: 'Inter', Arial, sans-serif; text-align:center; mso-border-alt:none; word-break:keep-all;"
                                   onmouseover="this.style.backgroundColor='rgba(53, 47, 68, 0.9)'"
                                   onmouseout="this.style.backgroundColor='#352F44'">
                                 <a href="{{ env('API_URL') }}/sign-up?{{$data['link']}}" style="text-decoration: none; color: #D9D9D9; padding: 10px 24px; font-size:14px; display:inline-block;">
                                    Confirm Your Code
                                 </a>
                              </div>
                              <!--[if mso]></center></v:textbox></v:roundrect></td></tr></table><![endif]-->
                              <div style="margin-top: 16px; margin-bottom: 48px; font-family: 'Inter', Arial, sans-serif;">
                                 <a href="{{ env('API_URL') }}/sign-up?{{$data['link']}}" style="color: #157275; font-size: 12px; font-weight: 500; text-decoration: underline;">You can also click here to confirm</a>
                                 <!--[if mso]></center></v:textbox></v:roundrect></td></tr></table><![endif]-->
                              </div>
                              <div>
                                 <p style="font-family: 'Inter', Arial, sans-serif; color: #000000; font-size: 12px; font-weight: 400; margin: 0; word-break: break-word; text-align: center;">If you didn’t sign up for an account, please ignore this email.</p>
                                 <!--[if mso]></center></v:textbox></v:roundrect></td></tr></table><![endif]-->
                              </div>
                           </div>
                           <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                     </div>
                  </div>
                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
               </div>
            </div>
         </div>
         <div style="background-color:#f5f5f5;">
            <div class="block-grid " style="min-width: 320px; max-width: 600px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; margin: 0 auto;">
               <div style="border-collapse: collapse; display: table; width: 100%; background-color: #352F44;">
                  <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f5f5f5;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px"><tr class="layout-full-width" style="background-color:#1a0b30"><![endif]-->
                  <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color:#352F44;width:600px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
                  <div class="col num12" style="min-width: 320px; max-width: 600px; display: table-cell; vertical-align: top; width: 600px;">
                     <div class="col_cont" style="width:100% !important;">
                        <!--[if (!mso)&(!IE)]><!-->
                        <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:24px; padding-bottom:24px; padding-right: 0px; padding-left: 0px;">
                           <!--<![endif]-->
                           <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 24px; padding-left: 24px; font-family: Tahoma, Verdana, sans-serif"><![endif]-->
                           <div style="color:#FFFFFF; font-family: 'Inter', Arial, sans-serif; line-height:1.2; padding-right: 24px; padding-left: 24px;">
                              <div class="txtTinyMce-wrapper" style="line-height: 1.2; mso-line-height-alt: 14px; ">
                                 <p style="font-size: 10px; font-weight: 400; color: #FFFFFF; padding-bottom: 24px; margin: 0; text-align: left; line-height: 1.2; word-break: break-word; mso-line-height-alt: 14px;">CFDs are complex instruments with a high risk of losing money rapidly due to leverage. Ensure you understand the risks involved and assess whether you can afford the potential losses. Past performance is not indicative of future results.This email is for informational purposes only and does not constitute financial or professional advice. Consult an independent advisor before making any decisions. Virturo, owned by Finastra LTD, complies with GDPR.
                                    By engaging with this email, you consent to data processing as per our Privacy Policy. For details, visit our website.
                                    If you’re not the intended recipient, please delete this email and notify the sender</p>

                                 <p style="font-size: 10px; font-weight: 400; color: #FFFFFF; padding-bottom: 8px; margin: 0; text-align: center; line-height: 1.2; word-break: break-word; mso-line-height-alt: 14px;">Virturo.com, 30 St Mary's Axe, London, Greater London EC3A 8BF, United Kingdom, <a href="tel:+442039100856" style="color: #FFFFFF; text-decoration: none">+44 20 3910 0856</a></p>
                              </div>
                           </div>
                           <!--[if mso]></td></tr></table><![endif]-->
                           <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                     </div>
                  </div>
                  <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
                  <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
               </div>
            </div>
         </div>
         <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
      </td>
   </tr>
   </tbody>
</table>
<!--[if (IE)]></div><![endif]-->
</body>
</html>
