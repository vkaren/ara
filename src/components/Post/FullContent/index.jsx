import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const FullContent = ({
  onClickShowMore,
  showMore,
  contentLetters,
  isHomeOrProfilePage,
}) => {
  if (isHomeOrProfilePage) {
    return <Box component="span">...</Box>;
  }

  return (
    <Box component="span">
      {!showMore && (
        <Button
          onClick={onClickShowMore}
          size="small"
          sx={{ ml: 1, textTransform: "none" }}
        >
          ... Show more
        </Button>
      )}

      {showMore && (
        <>
          <Typography component="span" variant="body1">
            {contentLetters.slice(41).join("")}
          </Typography>
          <Button
            onClick={onClickShowMore}
            size="small"
            sx={{ ml: 1, textTransform: "none" }}
          >
            Show less
          </Button>
        </>
      )}
    </Box>
  );
};

export default FullContent;
