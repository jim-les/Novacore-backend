const express = require('express');
const router = express.Router();
const axios = require('axios');
const cheerio = require('cheerio');

// Define the scraping endpoint
router.get('/scrape', async (req, res) => {
    try {
        const url = 'https://lu.ma/event/manage/evt-xYEahcqmX7CRoK0/guests';

        // Fetch the HTML from the URL
        const { data } = await axios.get(url);

        // Load the HTML into cheerio
        const $ = cheerio.load(data);

        // Initialize an array to store the results
        let results = [];

        // Iterate over each div with the specific class
        $('div.jsx-4155675949.title-label.text-tinted.fs-sm').each((index, element) => {
            const text = $(element).text().trim();

            // Check if the text contains the keyword "Going"
            if (text.includes('Going')) {
                results.push(text); // Store the relevant text
            }
        });

        // Send the results as a JSON response
        res.json({ data: results });

    } catch (error) {
        console.error('Error fetching the website:', error.message); // Improved error handling
        res.status(500).json({ error: 'Error fetching the website' });
    }
});

module.exports = router;
