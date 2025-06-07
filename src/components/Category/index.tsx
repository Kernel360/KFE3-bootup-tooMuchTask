import { CategoryStyle } from "./styles";
import PersonIcon from "@mui/icons-material/Person";

interface Props {
  title: string;
  active: boolean;
}

const Category = ({ title, active }: Props) => {
  return (
    <CategoryStyle active={active}>
      <PersonIcon className="icon" />
      <span>{title}</span>
    </CategoryStyle>
  );
};

export default Category;
