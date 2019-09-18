$(document).ready(function () {
    // On each click
    $("input[type='submit']").click(function (e) {
        e.preventDefault();
        // Get values in input fields
        var name = $("input[name='name']").val();
        var title = $("input[name='title']").val();
        var email = $("input[name='email']").val();
        // Create signature HTML using ES6 template literal.
        // To update signature, replace this code and template the appropriate variables.
        var sig = `
            <br>
            <br>
            <table cellpadding="0" cellspacing="0" border="0" style="background: none; border-width: 0px; border: 0px; margin: 0; padding: 0;">
            <tr>
            <td valign="top" style="padding-top: 0; padding-bottom: 0; padding-left: 0; padding-right: 24px; border-top: 0; border-bottom: 0: border-left: 0; border-right: 0">
                <img style="height: 132px;" id="preview-image-url" src="logo.png">
            </td>
            <td style="padding-top: 0; padding-bottom: 0; padding-left: 12px; padding-right: 0;">
                <table cellpadding="0" cellspacing="0" border="0" style="background: none; border-width: 0px; border: 0px; margin: 0; padding: 0;">
                <tr>
                    <td colspan="2" style="padding-bottom: 5px; color: #191819; font-weight: bold; font-size: 18px; font-family: 'Playfair Display', sans-serif;">${name}</td></tr>
                    <tr>
                    <td colspan="2" style="color: #191819; font-size: 14px; font-family: 'Roboto', serif;">${title}</td>
                    </tr>
                    <tr>
                    <td style="color: #191819; font-size: 14px; font-family: 'Roboto', serif;"><a href="mailto:${email}@wrbbradio.com" style="color: #d30f0f; text-decoration: none; font-weight: normal; font-size: 14px;">${email}@wrbbradio.com</a></td>
                    </tr>
                </table>
                </td>
            </tr>
            </table>        
        `;
        // Insert as HTML into page
        $("#output").html(sig);
        // Clear all input fields
        var name = $("input[name='name']").val("");
        var title = $("input[name='title']").val("");
        var email = $("input[name='email']").val("");
    })
});