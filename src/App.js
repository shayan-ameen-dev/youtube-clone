import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Box } from '@mui/system';

import { Navbar } from './components';
import { Feed, VideoDetail, ChannelDetail, SearchFeed } from './pages';

export default function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: '#000' }}>
        <Navbar />
        <Routes>
          <Route path="/feed" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
          <Route path="*" element={<Navigate to="/feed" />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}
