import React from 'react';
import { Box, Text, Heading } from 'theme-ui';

export default function SectionHeader({ title, slogan, isWhite }) {
  return (
    <Box sx={{variant : 'sectionHeader'}}>
      <Text
        as="p"
        sx={{
          variant : 'sectionHandler.subTitle',
          color: isWhite ? 'white' : 'primary',
          opacity: isWhite ? 0.7 :1
        }}
      >
        {slogan}
      </Text>
      <Heading
        as="h2"
        sx={{
          variant : 'sectionHandler.title',
          color: isWhite ? 'white' : 'heading',
          opacity: isWhite ? 0.7 :1,
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {title}
      </Heading>
    </Box>
  );
}
