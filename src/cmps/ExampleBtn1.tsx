import GenericButton from '../genericCmps/button/GenericButton';

const ExampleBtn1 = () => {
  return (
    <GenericButton
      variant="primary"
      size="large"
      label="Primary Button"
      onClick={() => console.log('Primary Button Clicked')}
    />
  );
};

export default ExampleBtn1;
