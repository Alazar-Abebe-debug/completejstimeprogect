// Copy the text on clicking the button
console.log("jquery")
$(document).ready(function () {
    // Function to add the bounce effect
    function add() {
        $(".copied").addClass("bounce-effect");
    }

    // Function to remove the bounce effect
    function remove() {
        $(".copied").removeClass("bounce-effect").toggle();
    }

    $(".copy-btn").click(function () {
        // Select and copy the text from #text-field
        $(".textfield").select();
        document.execCommand("copy");

        // Add bounce effect to show 'copied' message
        add();
        setTimeout(remove, 800);

    });
});
