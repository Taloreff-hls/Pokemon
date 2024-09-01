import { ContentLayout } from "../styles/ContentLayout";
import ActionBar from "./ActionBar";
import Typography from "../styles/Typography";

const PokemonContent = () => {
  return (
    <ContentLayout>
      <Typography weight={500} type="heading-lg" color="#44484C">
        All Pokemons
      </Typography>
      <ActionBar />
    </ContentLayout>
  );
};

export default PokemonContent;
