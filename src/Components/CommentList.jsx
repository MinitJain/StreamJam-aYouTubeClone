import React, { useState } from "react";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";

const CommentList = ({ comments }) => {
  const isSmallScreen = useMediaQuery("(max-width:900px)");
  const [showAll, setShowAll] = useState(false);

  if (!comments || comments.length === 0) {
    return (
      <Box px={2} py={4} bgcolor="#232323" borderRadius={2}>
        <Typography color="gray">No comments available.</Typography>
      </Box>
    );
  }

  const visibleComments =
    isSmallScreen && !showAll ? comments.slice(0, 1) : comments;

  return (
    <Box
      px={{ xs: 1, sm: 2, md: 3 }}
      py={{ xs: 2, sm: 3, md: 4 }}
      bgcolor="#232323"
      borderRadius={2}
      sx={{ transition: "all 0.3s", boxShadow: 1 }}
    >
      {visibleComments.map((comment, index) => {
        const snippet = comment.snippet.topLevelComment.snippet;
        return (
          <Box key={index} mb={{ xs: 2, sm: 3 }}>
            <Typography
              variant="subtitle2"
              color="gray"
              fontWeight="bold"
              sx={{ mb: 0.5 }}
            >
              {snippet.authorDisplayName}
            </Typography>
            <Typography
              variant="body1"
              color="white"
              sx={{
                whiteSpace: "pre-line",
                fontSize: { xs: "1rem", sm: "1.1rem" },
              }}
            >
              {snippet.textDisplay}
            </Typography>
          </Box>
        );
      })}
      {isSmallScreen && comments.length > 1 && !showAll && (
        <Button
          variant="outlined"
          size="small"
          sx={{ color: "white", borderColor: "gray", mt: 1 }}
          onClick={() => setShowAll(true)}
        >
          Show more comments
        </Button>
      )}
    </Box>
  );
};

export default CommentList;
