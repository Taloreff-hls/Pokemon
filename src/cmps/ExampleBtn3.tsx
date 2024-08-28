import GenericButton from '../genericCmps/button/GenericButton';

const ExampleBtn3 = () => {
  return (
    <GenericButton
      variant="primary"
      size="small"
      label="Disabled"
      onClick={() => console.log('This should not be clickable')}
      disabled={true}
    />
  );
};

export default ExampleBtn3;
