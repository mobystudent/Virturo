<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head></head>
<body>
<p><strong>Support form</strong></p>
<div>
    <p>New message:</p>
    <p>Type: {{ $supportMessage->type }}</p>
    @if($supportMessage->first_name || $supportMessage->last_name)
        <p style="margin: 0; line-height: 1.2; word-break: break-word; mso-line-height-alt: 17px;">
            Name: {{ $supportMessage->first_name }} {{ $supportMessage->last_name }}
        </p>
    @endif
    <p style="margin: 0; line-height: 1.2; word-break: break-word; mso-line-height-alt: 17px;">
        Email: {{ $supportMessage->email }}
    </p>
    @if($supportMessage->phone)
        <p style="margin: 0; line-height: 1.2; word-break: break-word; mso-line-height-alt: 17px; ">
            Phone: {{ $supportMessage->phone }}
        </p>
    @endif
    @if($supportMessage->subject)
        <p style="margin: 0; line-height: 1.2; word-break: break-word; mso-line-height-alt: 17px;">
            Subject: {{ $supportMessage->subject }}
        </p>
    @endif
    @if($supportMessage->question)
        <p style="margin: 0; line-height: 1.2; word-break: break-word; mso-line-height-alt: 17px; ">
            Message: {{ $supportMessage->question }}
        </p>
    @endif
    @if($supportMessage->location)
        <p style="margin: 0; line-height: 1.2; word-break: break-word; mso-line-height-alt: 17px; ">
            Location: {{ $supportMessage->location }}
        </p>
    @endif
</div>
</body>
</html>