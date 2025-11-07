document.addEventListener("DOMContentLoaded", function() {
    const jobListingsContainer = document.getElementById("job-listings-container");

    // Display jobs in reverse order (newest first)
    const reversedJobListings = [...jobListings].reverse();

    reversedJobListings.forEach(job => {
        const jobElement = document.createElement("div");
        jobElement.classList.add("job-listing");

        // Construct the share text
        const shareText = `Job Alert!\n\n*Position:* ${job.title}\n*Company:* ${job.company}\n*Location:* ${job.location}\n\n*Apply Here:*`;
        const applyLink = job.applyLink;

        // Encode the text and link for URLs
        const encodedShareText = encodeURIComponent(shareText);
        const encodedApplyLink = encodeURIComponent(applyLink);


        jobElement.innerHTML = `
            <h3>${job.title}</h3>
            <p class="company-info">${job.company} - ${job.location}</p>
            <p>${job.description}</p>
            <a href="${job.applyLink}" target="_blank" class="apply-button">Apply Now</a>
            <div class="share-buttons">
                <a href="https://wa.me/?text=${encodedShareText}%20${encodedApplyLink}" target="_blank" class="whatsapp-share">Share to WhatsApp</a>
                <a href="https://t.me/share/url?url=${encodedApplyLink}&text=${encodedShareText}" target="_blank" class="telegram-share">Share to Telegram</a>
            </div>
        `;
        jobListingsContainer.appendChild(jobElement);
    });
});
