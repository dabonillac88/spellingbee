document.addEventListener('DOMContentLoaded', () => {
    // The complete word bank remains the same
    const wordBank = {
        "4-5":{"ANIMALS":["Mouse","Rabbit","Horse","Tiger","Lion","Panda","Dog","Cat","Bird","Fish","Bear","Cow","Duck","Elephant","Fox","Frog","Giraffe","Goat","Hippo","Kangaroo","Monkey","Penguin","Pig","Sheep","Zebra"],"OCCUPATIONS AND PROFESSIONS":["Engineer","Actress","Farmer","Journalist","Painter","Doctor","Nurse","Teacher","Student","Police officer","Firefighter","Chef","Baker","Singer","Dancer","Driver","Pilot","Scientist","Waiter","Worker"],"PLACES AROUND TOWN":["Bank","Bakery","Cafeteria","Hospital","School","Museum","Restaurant","Supermarket","Airport","Bookstore","Bus station","Church","Cinema","Clothing store","Gas station","Gym","Hotel","Library","Park","Pharmacy"],"ADJECTIVES":["Tall","Short","Large","Big","Small","Fat","Thin","Long","Beautiful","Ugly","Happy","Sad","Angry","Scared","Surprised","Tired","Hungry","Thirsty","Clean","Dirty"],"FRUITS AND VEGETABLES":["Apple","Pear","Banana","Kiwi","Papaya","Orange","Watermelon","Grapes","Strawberry","Lemon","Pineapple","Mango","Cherry","Peach","Plum","Broccoli","Carrot","Lettuce","Potato","Tomato"],"FOOD":["Milk","Cheese","Butter","Egg","Cereal","Bread","Rice","Pasta","Meat","Chicken","Fish","Salad","Soup","Sandwich","Pizza","Hamburger","Hot dog","French fries","Ice cream","Cake"],"CLOTHING AND ACCESSORIES":["Shirt","Skirt","Dress","Shorts","Tie","T-shirt","Pants","Jacket","Sweater","Coat","Socks","Shoes","Boots","Hat","Gloves","Scarf","Belt","Glasses","Watch","Ring"],"HUMAN BODY":["Head","Hair","Face","Eye","Ear","Nose","Mouth","Tooth","Neck","Arm","Hand","Finger","Leg","Foot","Toe","Back","Stomach","Chest","Shoulder","Knee"],"THE SCHOOL":["Classroom","Pen","Pencil","Eraser","Chair","Desk","Book","Notebook","Backpack","Ruler","Scissors","Glue","Crayon","Marker","Board","Computer","Laptop","Projector","Map","Globe"],"THE HOUSE AND FURNITURE":["Bathroom","Bedroom","Kitchen","Garden","Window","Door","Living room","Dining room","Garage","Roof","Wall","Floor","Bed","Table","Sofa","Lamp","Clock","Mirror","Carpet","Curtain"],"MONTHS AND DAYS":["January","February","March","April","May","June","July","August","September","October","November","December","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],"COLORS":["Red","Pink","Orange","Yellow","Green","Blue","Purple","Brown","Black","White","Gray"],"FAMILY MEMBERS":["Mother","Father","Sister","Brother","Daughter","Son","Grandmother","Grandfather","Aunt","Uncle","Cousin"],"ACTION VERBS":["Unscramble","Write","Paste","Cut out","Find","Draw","Add","Answer","Ask","Read"]},
        "6-7":{"ANIMALS":["Butterfly","Grasshopper","Armadillo","Kangaroo","Leopard","Dolphin","Jellyfish","Octopus","Ostrich","Peacock","Rhinoceros","Squirrel","Starfish","Turtle","Vulture"],"OCCUPATIONS AND PROFESSIONS":["Magician","Engineer","Teacher","Physician","Architect","Accountant","Artist","Astronaut","Butcher","Carpenter","Dentist","Electrician","Lawyer","Mechanic","Musician"],"ADJECTIVES":["Annoying","Short","Large","Awesome","Awkward","Bored","Boring","Busy","Calm","Charming","Cheerful","Clumsy","Crazy","Creative","Crowded"],"SPORTS AND EQUIPMENT":["Skating","Golf","Tennis","Squash","Karate","Archery","Baseball","Basketball","Bowling","Boxing","Cycling","Football","Hockey","Running","Swimming"],"GEOGRAPHICAL FEATURES":["Archipelago","Canyon","Cave","Cliff","Coast","Desert","Dune","Forest","Glacier","Island","Jungle","Lake","Mountain","Ocean","Peninsula"],"PLACES IN A CITY":["Amusement park","Art gallery","Bridge","Building","Castle","Cathedral","Cemetery","Circus","Clinic","College","Courthouse","Factory","Fountain","Highway","Jail"],"FEELINGS AND EMOTIONS":["Amazed","Amused","Ashamed","Astonished","Bewildered","Blissful","Confident","Confused","Content","Curious","Delighted","Depressed","Disappointed","Ecstatic","Embarrassed"],"TECHNOLOGY AND COMMUNICATION":["Algorithm","Application","Browser","Cable","Camera","Cell phone","Channel","Charger","Chat","Code","Computer","Connection","Cookie","Cyberbullying","Database"]},
        "8-9":{"ANIMALS":["Butterfly","Ladybug","Grasshopper","Hamster","Buffalo","Cheetah","Chimpanzee","Cockroach","Crocodile","Dragonfly","Flamingo","Gorilla","Hedgehog","Hummingbird","Koala"],"IRREGULAR VERBS":["Beat","Become","Begin","Bite","Bleed","Blow","Break","Bring","Build","Buy","Catch","Choose","Come","Cost","Creep"],"COMMONLY USED WORDS":["ability","advantage","afterwards","against","already","although","among","amount","ancient","another","anybody","anything","anyway","anywhere","apart"],"SCIENCE AND NATURE":["Atmosphere","Atom","Avalanche","Bacteria","Blizzard","Botany","Carbon","Carnivore","Cell","Chemical","Climate","Comet","Compass","Condensation","Constellation"],"ACADEMIC VOCABULARY":["Achievement","Analysis","Approach","Assessment","Assumption","Authority","Benefit","Category","Chapter","Comment","Community","Conclusion","Conduct","Conflict","Consent"]},
        "10-11":{"NOUNS":["Accountant","Architecture","Arrangement","Barbecue","Behavior","Childhood","Championship","Childishness","Citizenship","Cleverness","Collection","Comfort","Commitment","Communication","Comparison","Competition","Complaint","Complexity","Concentration","Conclusion"],"VERBS":["Apologize","Acknowledge","Breathe","Download","Encourage","Entertain","Exaggerate","Fascinate","Forecast","Guarantee","Hesitate","Highlight","Illustrate","Imagine","Implement"],"ADJECTIVES":["Abroad","Anxious","Careless","Comfortable","Concerned","Conscious","Consistent","Convenient","Courageous","Critical","Curious","Dangerous","Deliberate","Dependent","Determined"],"ADVERBS":["Definitely","Hopefully","Immediately","Obviously","Sincerely","Suddenly","Thankfully","Therefore","Unfortunately","Upstairs","Downstairs","Everywhere","Nowhere","Somewhere","Anywhere"]}
    };

    let tournamentLevel = null, allParticipants = [], activePlayers = [], eliminatedPlayers = [],
        availableWords = [], roundNumber = 1, currentPlayerIndex = 0, roundWinners = [],
        roundEliminated = [], currentWord = {};

    const screens = {
        setup: document.getElementById('setup-screen'),
        tournament: document.getElementById('tournament-screen'),
        summary: document.getElementById('round-summary-screen'),
        gameOver: document.getElementById('game-over-screen')
    };
    const levelSelect = document.getElementById('level-select'),
          participantRegistration = document.getElementById('participant-registration'),
          participantNameInput = document.getElementById('participant-name'),
          addParticipantBtn = document.getElementById('add-participant-btn'),
          participantsList = document.getElementById('participants-list'),
          startTournamentBtn = document.getElementById('start-tournament-btn'),
          spellInput = document.getElementById('spell-input'),
          submitBtn = document.getElementById('submit-btn'),
          nextTurnBtn = document.getElementById('next-turn-btn'),
          nextRoundBtn = document.getElementById('next-round-btn'),
          newTournamentBtn = document.getElementById('new-tournament-btn'),
          exportPdfBtn = document.getElementById('export-pdf-btn');

    const ui = {
        currentRound: document.getElementById('current-round'),
        playersLeft: document.getElementById('players-left'),
        playerTurn: document.getElementById('player-turn'),
        wordCategory: document.getElementById('word-category'),
        wordToSpell: document.getElementById('word-to-spell'),
        feedback: document.getElementById('feedback'),
        summaryRoundTitle: document.getElementById('summary-round-title'),
        winnersList: document.getElementById('winners-list'),
        eliminatedList: document.getElementById('eliminated-list'),
        winnerName: document.getElementById('winner-name'),
        finalLeaderboardBody: document.getElementById('final-leaderboard-body')
    };

    function showScreen(screenName) {
        Object.values(screens).forEach(screen => screen.classList.add('hidden'));
        screens[screenName].classList.remove('hidden');
    }

    function addParticipant() {
        const name = participantNameInput.value.trim();
        if (name && !allParticipants.includes(name)) {
            allParticipants.push(name);
            updateParticipantsList();
            participantNameInput.value = '';
            participantNameInput.focus();
        }
    }

    function updateParticipantsList() {
        participantsList.innerHTML = '';
        allParticipants.forEach(name => {
            const li = document.createElement('li');
            li.textContent = name;
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'x';
            removeBtn.className = 'remove-participant-btn';
            removeBtn.onclick = () => removeParticipant(name);
            li.appendChild(removeBtn);
            participantsList.appendChild(li);
        });
        startTournamentBtn.disabled = allParticipants.length < 2;
    }

    function removeParticipant(name) {
        allParticipants = allParticipants.filter(p => p !== name);
        updateParticipantsList();
    }
    
    function startTournament() {
        activePlayers = [...allParticipants];
        loadWordsForLevel();
        startRound();
    }

    function loadWordsForLevel() {
        availableWords = [];
        const categories = wordBank[tournamentLevel];
        for (const category in categories) {
            categories[category].forEach(word => availableWords.push({ word, category }));
        }
        availableWords.sort(() => Math.random() - 0.5);
    }
    
    function startRound() {
        roundWinners = [];
        roundEliminated = [];
        currentPlayerIndex = 0;
        ui.currentRound.textContent = roundNumber;
        showScreen('tournament');
        nextTurn();
    }

    function nextTurn() {
        if (currentPlayerIndex >= activePlayers.length) {
            showRoundSummary();
            return;
        }
        const currentPlayer = activePlayers[currentPlayerIndex];
        currentWord = availableWords.pop();
        
        if (!currentWord) {
            alert("The word bank is empty. The tournament ends in a draw among the remaining players.");
            endTournamentAsDraw();
            return;
        }
        
        ui.playerTurn.textContent = `Turn of: ${currentPlayer}`;
        ui.playersLeft.textContent = activePlayers.length - currentPlayerIndex;
        ui.wordCategory.textContent = currentWord.category;
        ui.wordToSpell.textContent = currentWord.word;
        ui.feedback.textContent = '';
        ui.feedback.className = 'feedback-message';
        
        spellInput.value = '';
        spellInput.disabled = false;
        spellInput.focus();
        submitBtn.classList.remove('hidden');
        nextTurnBtn.classList.add('hidden');

        speakWord(currentWord.word);
    }

    function checkSpelling() {
        const userInput = spellInput.value.trim();
        const correct = userInput.toLowerCase() === currentWord.word.toLowerCase();

        if (correct) {
            ui.feedback.textContent = 'Correct!';
            ui.feedback.className = 'feedback-message correct';
            roundWinners.push(activePlayers[currentPlayerIndex]);
        } else {
            ui.feedback.textContent = `Incorrect. The word was: ${currentWord.word}`;
            ui.feedback.className = 'feedback-message incorrect';
            roundEliminated.push(activePlayers[currentPlayerIndex]);
        }

        spellInput.disabled = true;
        submitBtn.classList.add('hidden');
        nextTurnBtn.classList.remove('hidden');
    }

    function showRoundSummary() {
        roundEliminated.forEach(player => eliminatedPlayers.push({ name: player, round: roundNumber }));
        activePlayers = [...roundWinners];
        
        if (activePlayers.length === 1) {
            endTournament();
            return;
        } else if (activePlayers.length === 0) {
            endTournamentAsDraw();
            return;
        }

        ui.summaryRoundTitle.textContent = `End of Round ${roundNumber}`;
        ui.winnersList.innerHTML = roundWinners.map(name => `<li>${name}</li>`).join('') || "<li>None</li>";
        ui.eliminatedList.innerHTML = roundEliminated.map(name => `<li>${name}</li>`).join('') || "<li>None</li>";
        showScreen('summary');
    }
    
    function endTournament() {
        const winner = activePlayers[0];
        ui.winnerName.textContent = winner;
        
        const finalRanking = [ { name: winner, round: 'Winner' }, ...eliminatedPlayers.reverse() ];
        
        ui.finalLeaderboardBody.innerHTML = finalRanking.map((player, index) => `
            <tr>
                <td>${index + 1}</td>
                <td>${player.name}</td>
                <td>${player.round}</td>
            </tr>
        `).join('');
        showScreen('gameOver');
    }

    function endTournamentAsDraw() {
        ui.winnerName.textContent = "It's a Draw!";
        const finalRanking = [...eliminatedPlayers.reverse()];
        ui.finalLeaderboardBody.innerHTML = finalRanking.map((player, index) => `
            <tr>
                <td>${index + 1}</td>
                <td>${player.name}</td>
                <td>${player.round}</td>
            </tr>
        `).join('');
        showScreen('gameOver');
    }

    function resetTournamentState() {
        allParticipants = [];
        activePlayers = [];
        eliminatedPlayers = [];
        availableWords = [];
        roundNumber = 1;
        currentPlayerIndex = 0;
    }

    function speakWord(word) {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(word);
            utterance.lang = 'en-US';
            window.speechSynthesis.speak(utterance);
        }
    }

    function exportLeaderboardToPDF() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        doc.setFontSize(18);
        doc.text("Spelling Bee Tournament - Final Results", 14, 22);
        doc.setFontSize(11);
        doc.setTextColor(100);
        doc.text(`Level: Grades ${tournamentLevel}`, 14, 30);

        doc.autoTable({
            html: '#final-leaderboard-table',
            startY: 35,
            theme: 'grid',
            headStyles: { fillColor: [139, 0, 0] }
        });

        doc.save(`SpellingBee_Leaderboard_Grades_${tournamentLevel}.pdf`);
    }

    // Event Listeners
    levelSelect.addEventListener('change', () => {
        tournamentLevel = levelSelect.value;
        participantRegistration.classList.remove('hidden');
        resetTournamentState();
        updateParticipantsList();
    });
    addParticipantBtn.addEventListener('click', addParticipant);
    participantNameInput.addEventListener('keyup', (e) => { if (e.key === 'Enter') addParticipant(); });
    startTournamentBtn.addEventListener('click', startTournament);
    submitBtn.addEventListener('click', checkSpelling);
    spellInput.addEventListener('keyup', (e) => { if (e.key === 'Enter') checkSpelling(); });
    nextTurnBtn.addEventListener('click', () => { currentPlayerIndex++; nextTurn(); });
    nextRoundBtn.addEventListener('click', () => { roundNumber++; startRound(); });
    newTournamentBtn.addEventListener('click', () => {
        resetTournamentState();
        levelSelect.value = "";
        participantRegistration.classList.add('hidden');
        showScreen('setup');
    });
    exportPdfBtn.addEventListener('click', exportLeaderboardToPDF);

    showScreen('setup');
});
