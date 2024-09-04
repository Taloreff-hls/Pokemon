import { ContentLayout } from "../styles/ContentLayout";
import ActionBar from "./ActionBar";
import Typography from "../styles/Typography";
import PokemonTable from "./PokemonTable";

const PokemonContent = () => {
  return (
    <ContentLayout>
      <Typography weight={500} type="heading-lg" color="#44484C">
        All Pokemons
      </Typography>
      <ActionBar />
      <PokemonTable />
    </ContentLayout>
  );
};

export default PokemonContent;
