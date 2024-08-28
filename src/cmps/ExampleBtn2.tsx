import GenericButton from '../genericCmps/button/GenericButton';

const ExampleBtn2 = () => {
  return (
    <GenericButton
      variant="secondary"
      size="medium"
      label="Secondary Button"
      onClick={() => console.log('Secondary Button Hovered')}
    />
  );
};

export default ExampleBtn2;
