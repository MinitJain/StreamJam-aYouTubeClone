import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction={{ xs: "row", md: "column" }}
      sx={{
        overflowX: { xs: "auto", md: "unset" },
        overflowY: { xs: "hidden", md: "auto" },
        height: { xs: "auto", md: "95%" },
        flexDirection: { xs: "row", md: "column" },
        color: "white",
        width: { xs: "100vw", md: "auto" },
        pb: { xs: 1, md: 0 },
        mb: { xs: 1, md: 0 },
        pl: { xs: 0.5, md: 0 },
        pr: { xs: 0.5, md: 0 },
        gap: { xs: 1, md: 0 },
        minHeight: { xs: "48px", md: "unset" },
      }}
    >
      {categories.map((category) => (
        <button
          key={category.name}
          className={`category-btn${
            category.name === selectedCategory ? " selected" : ""
          }`}
          onClick={() => setSelectedCategory(category.name)}
          style={{
            color: "white",
            minHeight: 40,
            borderRadius: 20,
            marginRight: 4,
            padding: "7px 15px",
            // No minWidth, let content size the button
          }}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "white" : "red",
              marginRight: "10px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.8",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
