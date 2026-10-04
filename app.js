
const topicInput = document.getElementById("topic");
const generateBtn = document.getElementById("generate");
const clearBtn = document.getElementById("clear");
const results = document.getElementById("results");
const toolTitle = document.getElementById("tool-title");
const toast = document.getElementById("toast");

let currentTool = "ideas";

const templates = {
  ideas: [
    "10 Things Nobody Tells You About {topic}",
    "I Tried {topic} for 7 Days — Here's What Happened",
    "The Ultimate Beginner's Guide to {topic}",
    "5 Mistakes Everyone Makes With {topic}",
    "Is {topic} Really Worth It? The Truth"
  ],
  titles: [
    "You Won't Believe These {topic} Secrets!",
    "Stop Doing This With {topic}!",
    "{topic}: Everything You Need to Know",
    "The Truth About {topic} (Nobody Talks About This)",
    "I Tested {topic} So You Don't Have To"
  ],
  hashtags: [
    "#{tag}",
    "#{tag}Tips",
    "#{tag}Tutorial",
    "#{tag}Community",
    "#{tag}Creator",
    "#YouTube",
    "#Shorts",
    "#ContentCreator",
    "#Trending",
    "#Viral"
  ]
};

const titles = {
  ideas: "Video Idea Generator",
  titles: "Video Title Generator",
  hashtags: "Hashtag Generator"
};

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2000);
}

function renderResults(items) {
  results.replaceChildren();

  items.forEach((item) => {
    const row = document.createElement("div");
    row.className = "result-item";

    const text = document.createElement("span");
    text.textContent = item;

    const button = document.createElement("button");
    button.className = "copy-btn";
    button.textContent = "Copy";

    button.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(item);
        showToast("Copied to clipboard!");
      } catch {
        showToast("Please select and copy the text.");
      }
    });

    row.append(text, button);
    results.appendChild(row);
  });
}

function generate() {
  const topic = topicInput.value.trim();

  if (!topic) {
    showToast("Please enter your topic first.");
    topicInput.focus();
    return;
  }

  const cleanTopic = topic.replace(/^#+/, "").trim();
  let items;

  if (currentTool === "hashtags") {
    const tag = cleanTopic.replace(/[^a-zA-Z0-9]/g, "");
    items = templates.hashtags.map((item) =>
      item.replace("{tag}", tag)
    );
  } else {
    items = templates[currentTool].map((item) =>
      item.replaceAll("{topic}", cleanTopic)
    );
  }

  renderResults(items);
}

function selectTool(tool) {
  currentTool = tool;
  toolTitle.textContent = titles[tool];
  results.innerHTML = `
    <div class="empty-state">
      <span>✧</span>
      <p>Your results will appear here.</p>
    </div>
  `;

  document.querySelector(".generator").scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}

document.querySelectorAll("[data-tool]").forEach((button) => {
  button.addEventListener("click", () => {
    selectTool(button.dataset.tool);
  });
});

generateBtn.addEventListener("click", generate);

topicInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") generate();
});

clearBtn.addEventListener("click", () => {
  topicInput.value = "";
  results.innerHTML = `
    <div class="empty-state">
      <span>✧</span>
      <p>Your results will appear here.</p>
    </div>
  `;
  topicInput.focus();
});

console.log("Grow Your Channel Faster is ready!");
