let game_array = ['stone', 'paper', 'scissor'];

let game_objective = {
    stone: [
        {
            genreated_value: 'paper',
            outcome: 'loose',
            emo : '🤚'
        },
        {
            genreated_value: 'scissor',
            outcome: 'win',
            emo : '✌️'
        },
        {
            genreated_value: 'stone',
            outcome: 'draw',
            emo : '✊'
        }
    ],
    paper: [
        {
            genreated_value: 'paper',
            outcome: 'draw',
            emo : '🤚'
        },
        {
            genreated_value: 'scissor',
            outcome: 'loose',
            emo : '✌️'
        },
        {
            genreated_value: 'stone',
            outcome: 'win',
            emo : '✊'

        }
    ],
    scissor: [
        {
            genreated_value: 'paper',
            outcome: 'win',
            emo : '🤚'
        },
        {
            genreated_value: 'scissor',
            outcome: 'draw',
            emo : '✌️'
        },
        {
            genreated_value: 'stone',
            outcome: 'loose',
            emo : '✊'
        }
    ],


}


let outcome_container = document.getElementById('outcome-container');
let you_selected = document.getElementById('you-selected');
let computer_selected = document.getElementById('computer-selected');
let game_count = 1;
let winloose = document.getElementById('winloose');
let showing = document.getElementById('showing');
let yourdisplay = document.getElementById('your-display');
let i = 0, j = 0;
let computerdisplay = document.getElementById('computer-display');
let btns = document.querySelectorAll('.btn');
btns.forEach(function (btn) {


    btn.addEventListener('click', function (event) {
        if (game_count == 6) {
            alert('game Over');
            location.reload();
        }
        outcome_container.style.display = 'flex';
        you_selected.textContent = event.target.textContent;
        let random_selected = Math.floor(Math.random() * 3);
        let entered_value = btn.getAttribute('data-value').toLowerCase().trim();
        let genreated_value = game_array[random_selected].toLowerCase().trim();
        let find_outcome = game_objective[entered_value];
        let result = find_outcome.find(function (obj) {
            return obj.genreated_value == genreated_value;
        })
        computer_selected.innerText = result.emo;
        showing.textContent = `Round${game_count}`;
        game_count++;
        if (result.outcome == 'win') {
            i++;
            yourdisplay.textContent = i;
            winloose.textContent = "Wow! You won select for next round";
        }
        else if (result.outcome == 'loose') {
            j++;
            computerdisplay.textContent = j;
            winloose.textContent = "Shit! You loose try again";
        }
        else {
            winloose.textContent = "Draw! You are think like computer";

        }
    })

})