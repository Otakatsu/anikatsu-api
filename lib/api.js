import express from 'express';
import cors from 'cors';
import axios from 'axios';

import {
  scrapeGenre,
  scrapeTopAiringAnime,
  scrapeAnimeMovies,
  scrapePopularAnime,
  scrapeRecentPage,
  scrapeOngoingSeries,
  scrapeAnimeList,
  scrapeRecentlyAdded,
  scrapeAnimeAZ,
  scrapeAnimeAZPage,
  scrapeNewSeason,
  scrapeAnimeListPage,
  scrapeMoviePage,
  scrapeGenrePage,
  scrapeSubCategoryPage,
  scrapeRecentRelease,
  scrapeOngoingAnime,
  scrapeNewSeasonPage,
  scrapeSearch,
  scrapePopularPage,
  scrapeSearchPage,
  scrapeAnimeDetails,
  scrapeOngoingPage,
  scrapeCompletedPage,
  scrapeSeason,
  scrapeCompletedAnime,
  scrapeWatchAnime,
  scrapeThread,
  DownloadReferer,
} from './anime_parser.js';

const port = process.env.PORT || 3000;

const corsOptions = {
  origin: '*',
  credentails: true,
  optionSuccessStatus: 200,
  port: port,
};

const app = express();

app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json('WORKING');
});

app.get('/search', async (req, res) => {
  try {
    const keyw = req.query.keyw;
    const page = req.query.page;

    const data = await scrapeSearch({ keyw: keyw, page: page });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      status: 500,
      error: 'Internal Error',
      message: err,
    });
  }
});

app.get('/getRecentlyAdded', async (req, res) => {
  try {
    const page = req.query.page;
    const data = await scrapeRecentlyAdded({ page: page });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      status: 500,
      error: 'Internal Error',
      message: err,
    });
  }
});

app.get('/getOngoingSeries', async (req, res) => {
  try {
    const page = req.query.page;
    const data = await scrapeOngoingSeries({ page: page });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      status: 500,
      error: 'Internal Error',
      message: err,
    });
  }
});


app.get('/searchPage', async (req, res) => {
  try {
    const keyw = req.query.keyw;
    const page = req.query.page;

    const data = await scrapeSearchPage({ keyw: keyw, page: page });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      status: 500,
      error: 'Internal Error',
      message: err,
    });
  }
});

app.get('/genrePage', async (req, res) => {
  try {
    const genre = req.query.genre;
    const page = req.query.page;

    const data = await scrapeGenrePage({ genre: genre, page: page });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      status: 500,
      error: 'Internal Error',
      message: err,
    });
  }
});

app.get('/anime-AZ-page', async (req, res) => {
  try {
    const aph = req.query.aph
    const page = req.query.page;

    const data = await scrapeAnimeAZPage({ aph: aph, page: page });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      status: 500,
      error: 'Internal Error',
      message: err,
    });
  }
});

app.get('/anime-list-page', async (req, res) => {
  try {
    const page = req.query.page;

    const data = await scrapeAnimeListPage({ page: page });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      status: 500,
      error: 'Internal Error',
      message: err,
    });
  }
});

app.get('/animeList', async (req, res) => {
  try {
    const page = req.query.page;

    const data = await scrapeAnimeList({ page: page });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      status: 500,
      error: 'Internal Error',
      message: err,
    });
  }
});

app.get('/animeListAZ', async (req, res) => {
  try {
    const aph = req.query.aph;
    const page = req.query.page;

    const data = await scrapeAnimeAZ({ aph: aph, page: page });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      status: 500,
      error: 'Internal Error',
      message: err,
    });
  }
});

app.get('/popularPage', async (req, res) => {
  try {
    const page = req.query.page;

    const data = await scrapePopularPage({ page: page });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      status: 500,
      error: 'Internal Error',
      message: err,
    });
  }
});

app.get('/newSeasonPage', async (req, res) => {
  try {
    const page = req.query.page;

    const data = await scrapeNewSeasonPage({ page: page });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      status: 500,
      error: 'Internal Error',
      message: err,
    });
  }
});

app.get('/completedPage', async (req, res) => {
  try {
    const page = req.query.page;

    const data = await scrapeCompletedPage({ page: page });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      status: 500,
      error: 'Internal Error',
      message: err,
    });
  }
});

app.get('/ongoingPage', async (req, res) => {
  try {
    const page = req.query.page;

    const data = await scrapeOngoingPage({ page: page });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      status: 500,
      error: 'Internal Error',
      message: err,
    });
  }
});

app.get('/moviePage', async (req, res) => {
  try {
    const page = req.query.page;

    const data = await scrapeMoviePage({ page: page });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      status: 500,
      error: 'Internal Error',
      message: err,
    });
  }
});

app.get('/subCategoryPage', async (req, res) => {
  try {
    const page = req.query.page;
    const subCategory = req.query.subCategory;

    const data = await scrapeSubCategoryPage({ page: page, subCategory: subCategory });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      status: 500,
      error: 'Internal Error',
      message: err,
    });
  }
});

app.get('/recent-release-page', async (req, res) => {
  try {
    const page = req.query.page;
    const type = req.query.type;

    const data = await scrapeRecentPage({ page: page, type: type });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      status: 500,
      error: 'Internal Error',
      message: err,
    });
  }
});

app.get('/recent-release', async (req, res) => {
  try {
    const page = req.query.page;
    const type = req.query.type;

    const data = await scrapeRecentRelease({ page: page, type: type });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      status: 500,
      error: 'Internal Error',
      message: err,
    });
  }
});

app.get('/new-season', async (req, res) => {
  try {
    const page = req.query.page;

    const data = await scrapeNewSeason({ page: page });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      status: 500,
      error: 'Internal Error',
      message: err,
    });
  }
});

app.get('/ongoing-anime', async (req, res) => {
  try {
    const page = req.query.page;

    const data = await scrapeOngoingAnime({ page: page });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      status: 500,
      error: 'Internal Error',
      message: err,
    });
  }
});

app.get('/completed-anime', async (req, res) => {
  try {
    const page = req.query.page;

    const data = await scrapeCompletedAnime({ page: page });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      status: 500,
      error: 'Internal Error',
      message: err,
    });
  }
});


app.get('/popular', async (req, res) => {
  try {
    const page = req.query.page;

    const data = await scrapePopularAnime({ page: page });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      status: 500,
      error: 'Internal Error',
      message: err,
    });
  }
});

app.get('/anime-movies', async (req, res) => {
  try {
    const page = req.query.page;
    const alphabet = req.query.aph;

    const data = await scrapeAnimeMovies({ page: page, aph: alphabet });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).send({
      status: 500,
      error: 'Internal Error',
      message: err,
    });
  }
});

app.get('/top-airing', async (req, res) => {
  try {
    const page = req.query.page;

    const data = await scrapeTopAiringAnime({ page: page });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).send({
      status: 500,
      error: 'Internal Error',
      message: err,
    });
  }
});

app.get('/season/:season', async (req, res) => {
  try {
    const page = req.query.page;
    const season = req.params.season;

    const data = await scrapeSeason({ page: page, season: season });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).send({
      status: 500,
      error: 'Internal Error',
      message: err, php
    });
  }
});

app.get('/genre/:genre', async (req, res) => {
  try {
    const genre = req.params.genre;
    const page = req.query.page;

    const data = await scrapeGenre({ genre: genre, page: page });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).send({
      status: 500,
      error: 'Internal Error',
      message: err,
    });
  }
});

app.get('/getAnime/:id', async (req, res) => {
  try {
    const id = req.params.id;

    const data = await scrapeAnimeDetails({ id: id });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      status: 500,
      error: 'Internal Error',
      message: err,
    });
  }
});

app.get('/fembed/watch/:id', async (req, res) => {
  try {
    const id = req.params.id;

    //const data = await scrapeFembed({ id: id });

    res.status(410).json({ message: 'Deprecated' });
  } catch (err) {
    res.status(500).json({
      status: 500,
      error: 'Internal Error',
      message: err,
    });
  }
});


app.get('/getEpisode/:id', async (req, res) => {
  try {
    const id = req.params.id;

    const data = await scrapeWatchAnime({ id: id });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      status: 500,
      error: 'Internal Error',
      message: err,
    });
  }
});





app.get('/thread/:episodeId', async (req, res) => {
  try {
    const episodeId = req.params.episodeId;
    const page = req.query.page;

    const data = await scrapeThread({ episodeId: episodeId, page: page });

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({
      status: 500,
      error: 'Internal Error',
      message: err,
    });
  }
});

app.get('/download-links/:episodeId', async (req, res) => {
  try {
    const episodeId = req.params.episodeId;

    //const data = await scrapeDownloadLinks({ episodeId: episodeId });

    res.status(410).json({ message: 'Deprecated' });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 500,
      error: 'Internal Error',
      message: err,
    });
  }
});

app.get('/download', async (req, res) => {
  try {
    const downloadLink = req.rawHeaders.find(
      (x) => x.includes('https://') && x.includes('.mp4')
    );

    if (!downloadLink) {
      return res.status(400).json({
        error: 'No downloadLink provided. Make sure to add the downloadLink in the headers.',
      });
    }

    await axios
      .get(downloadLink, {
        headers: { Referer: DownloadReferer },
        responseType: 'stream',
      })
      .then((stream) => {
        return new Promise((r, j) => {
          res.writeHead(200, {
            ...stream.headers,
          });
          stream.data.pipe(res);
        });
      });

    return res.status(200).json('Done Downloading.');
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 500,
      error: 'Internal Error',
      message: err,
    });
  }
});

app.use((req, res) => {
  res.status(404).json({
    status: 404,
    error: 'Not Found',
  });
});




app.listen(port, () => {
  console.log('Express server listening on port %d in %s mode', port, app.settings.env);
});