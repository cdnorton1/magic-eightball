function main() {
    var magicAnswers = ['It is certain', 'It is decidedly so', 'Without a doubt', 'Yes – definitely', 'You may rely on it', 'As I see it, yes', 'Most Likely', 'Outlook good', 'Yes', 'Signs point to yes.', 'Don’t count on it', 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful', 'Reply hazy, try again later', 'Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again'];

    function getAnswer() {
        var randomNum = Math.floor(Math.random() * magicAnswers.length);
        return magicAnswers[randomNum];
    }

    $('#shake').on("click", function() {
        var eightBall = document.getElementById('eight-ball');
        var answerWindow = document.getElementById('answer');
        $(eightBall).addClass('shake');
        document.getElementById('answer').innerHTML = '';
        setTimeout(function() {
            document.getElementById('answer').innerHTML = getAnswer();
        }, 2000);
        setTimeout(function() {
            $(eightBall).removeClass('shake');
        }, 1000);
    });

    document.getElementById("shake").style.cursor = "pointer";
}

$(document).ready(main);