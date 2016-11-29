function main() {
    var magicAnswers = ['It is certain', 'It is decidedly so', 'Without a doubt', 'Yes – definitely', 'You may rely on it', 'As I see it, yes', 'Most Likely', 'Outlook good', 'Yes', 'Signs point to yes.', 'Don’t count on it', 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful', 'Reply hazy, try again later', 'Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again'];

    function getAnswer() {
        var randomNum = Math.floor(Math.random() * magicAnswers.length);
        return magicAnswers[randomNum];
    }

    function fadeIn() {
        var answer = document.getElementById('answer');
        $(answer).addClass('fadeIn animate-delay');
        document.getElementById('answer').innerHTML = getAnswer();
    };

    $('#shake').on("click", function() {
        var eightBall = document.getElementById('eight-ball');
        $(eightBall).addClass('shake');
        fadeIn();
    });

    document.getElementById("shake").style.cursor = "pointer";
}

$(document).ready(main);