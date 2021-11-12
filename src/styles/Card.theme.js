const CardTheme = {
  parts: ['card', 'title'],
  baseStyle: {
    card: {
      display: 'flex',
      flexDirection: 'column',
      background: 'white',
      alignItems: 'center',
      borderRadius: '11px 11px 4px 4px',
      boxShadow: '2px 3px 11px rgba(42, 45, 67, 0.26)',
      height: '180px',
      width: '220px',
      maxWidth: '220px',
      minHeight: '180px',
    },
    title: {
      margin: '0 14px',
      color: 'purple.secondary',
      noOfLines: 4,
      textAlign: 'center',
    },
  },
  variants: {
    active: {
      card: {},
      title: {},
    },
    passed: {
      card: {
        margin: '50px',
        marginBottom: '10px',
      },
      title: {},
    },
  },
  defaultProps: {
    variant: 'smooth',
  },
};

export default CardTheme;
