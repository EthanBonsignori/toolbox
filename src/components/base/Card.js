import {
  Box,
  useStyles,
  useMultiStyleConfig,
  StylesProvider,
} from '@chakra-ui/react';
import React from 'react';

const CardTitle = props => {
  const styles = useStyles();
  return <Box as="span" __css={styles.title} {...props} />;
};

const Card = ({ variant, children, ...rest }) => {
  const styles = useMultiStyleConfig('Card', { variant });
  return (
    <Box __css={styles.card} {...rest}>
      <StylesProvider value={styles}>{children}</StylesProvider>
    </Box>
  );
};

Card.Title = CardTitle;

export default Card;
