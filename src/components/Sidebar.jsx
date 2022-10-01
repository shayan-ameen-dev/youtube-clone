import { Stack } from '@mui/material';

import { categories } from '../utils/constants';

export default function Sidebar({ selectedCategory, setSelectedCategory }) {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: 'auto',
        height: { sx: 'auto', md: '95%' },

        flexDirection: { md: 'column' },
      }}
    >
      {categories.map((category) => {
        const { icon, name } = category;

        return (
          <button
            className="category-btn"
            onClick={() => setSelectedCategory(name)}
            style={{
              background: name === selectedCategory && '#fc1503',
              color: '#fff',
            }}
            key={name}
          >
            <span
              style={{
                color: name === selectedCategory ? '#fff' : '#fc1503',
                marginRight: '15px',
              }}
            >
              {icon}
            </span>
            <span
              styled={{
                opacity: name === selectedCategory ? 1 : 0.8,
              }}
            >
              {name}
            </span>
          </button>
        );
      })}
    </Stack>
  );
}
