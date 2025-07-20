# YouTube Clone

A responsive YouTube-like video streaming web application built with React and Material-UI.  
This project allows users to browse, search, and watch YouTube videos, view related videos, and interact with a comments section—mimicking the core experience of YouTube.

---

## Features

- **Responsive Design:**  
  Fully responsive layout for desktop, tablet, and mobile devices.

- **Video Playback:**  
  Watch YouTube videos using an embedded player.

- **Channel Details:**  
  View channel information and navigate to channel pages.

- **Related Videos Sidebar:**  
  See a list of related videos in a sidebar (on desktop) or below the main video (on mobile).

- **Search Functionality:**  
  Search for videos and channels.

- **Comments Section:**
  - Displays the number of comments as a prominent heading.
  - On large screens, shows all comments with a gray background for distinction.
  - On small screens, shows only the top comment by default, with a “Show more comments” button to reveal the rest.
  - Responsive and visually separated from the main content.

---

## Tech Stack

- **Frontend:**

  - React
  - Material-UI (MUI)
  - React Router
  - React Player

- **API:**
  - YouTube Data API v3 (via a utility fetch function)

---

## Project Structure

```
youtube_clone/
  ├── public/
  ├── src/
  │   ├── Components/
  │   │   ├── ChannelCard.jsx
  │   │   ├── ChannelDetail.jsx
  │   │   ├── CommentList.jsx
  │   │   ├── Feed.jsx
  │   │   ├── Navbar.jsx
  │   │   ├── SearchBar.jsx
  │   │   ├── SearchFeed.jsx
  │   │   ├── SideBar.jsx
  │   │   ├── VideoCard.jsx
  │   │   ├── VideoDetail.jsx
  │   │   └── Videos.jsx
  │   ├── utils/
  │   │   ├── constants.js
  │   │   └── fetchFromAPI.js
  │   ├── App.js
  │   ├── index.js
  │   └── index.css
  ├── package.json
  └── README.md
```

---

## Getting Started

### 1. **Clone the repository**

```bash
git clone https://github.com/your-username/youtube_clone.git
cd youtube_clone
```

### 2. **Install dependencies**

```bash
npm install
```

### 3. **Set up YouTube Data API Key**

- Create a `.env` file in the root directory.
- Add your YouTube Data API v3 key:
  ```
  REACT_APP_YOUTUBE_API_KEY=your_api_key_here
  ```
- The API key is used in `src/utils/fetchFromAPI.js`.

### 4. **Run the app**

```bash
npm start
```

- The app will be available at `http://localhost:3000`.

---

## Usage

- **Browse videos** on the home feed.
- **Search** for videos or channels using the search bar.
- **Click a video** to watch it, see channel info, related videos, and comments.
- **On mobile**, only the top comment is shown by default for a cleaner UI.

---

## Customization

- You can adjust the number of comments, related videos, or other UI elements by editing the relevant components in `src/Components/`.
- The theme and colors can be customized via Material-UI’s theming system.

---

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## Acknowledgements

- [YouTube Data API v3](https://developers.google.com/youtube/v3)
- [Material-UI](https://mui.com/)
- [React Player](https://github.com/cookpete/react-player)
