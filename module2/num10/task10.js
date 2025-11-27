



const output = document.getElementById("output");
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {
    // 1. Number of candidates
    let num_candidates = parseInt(prompt("Enter the number of candidates:"));
    let candidates = [];

    // 2. Candidate names
    for (let i = 0; i < num_candidates; i++) {
        let name = prompt(`Enter the candidate name for candidate ${i + 1}:`);
        candidates.push({ name: name, votes: 0 });
    }

    // 3. Number of voters
    let num_voters = parseInt(prompt("Enter the number of voters:"));

    // 4. Voting
    for (let i = 0; i < num_voters; i++) {
        let vote = prompt(`Voter ${i + 1}, enter candidate name (leave empty for no vote):`);
        if (vote) {
            for (let c of candidates) {
                if (c.name === vote) {
                    c.votes++;
                }
            }
        }
    }

    // 5. Sort candidates by votes
    candidates.sort((a, b) => b.votes - a.votes);

    // 6. Display results
    output.textContent = `The winner is ${candidates[0].name} with ${candidates[0].votes} votes.\n\nResults:\n`;
    candidates.forEach(c => {
        output.textContent += `${c.name}: ${c.votes} votes\n`;
    });
});

