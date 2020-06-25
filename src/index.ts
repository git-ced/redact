export const sample = () => {
  if ('development' === process.env.NODE_ENV) {
    console.log('sample');
  }

  return 'sample';
};
