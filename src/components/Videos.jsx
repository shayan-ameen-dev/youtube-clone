import { Stack, Box } from '@mui/material';

import { VideoCard, ChannelCard } from '../components';

export default function Videos({ videos, direction }) {
  if (!videos?.length) return 'Loading...';

  return (
    <Stack
      direction={direction ? 'column' : 'row'}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {videos.map((item, index) =>
        item.id.videoId || item.id.channelId ? (
          <Box key={index}>
            {item.id.videoId && <VideoCard videoDetail={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        ) : null
      )}
    </Stack>
  );
}
