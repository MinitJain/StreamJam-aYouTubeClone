import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const selectedCategory = "New";

const SideBar = () => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
        color: "white",
      }}
    >
      {categories.map((category) => (
        <button
          key={category.name}
          className="category-btn"
          style={{
            background: category.name === selectedCategory ? "#FC1503" : "",
            color: "white",
          }}
        >
          <span>{category.icon}</span>
          <span>{category.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
