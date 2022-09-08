import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

const MuiAccordion = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleChange = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel1")}
      >
        <AccordionSummary id="panel1-header" expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Accordian 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            nisi magni beatae vitae excepturi iste cupiditate quas iure animi
            accusamus!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel2")}
      >
        <AccordionSummary id="panel2-header" expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
            pariatur debitis consectetur hic temporibus doloremque. Doloribus
            nemo minus dignissimos at, optio suscipit, sint hic incidunt
            repudiandae quasi harum labore vitae?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel3")}
      >
        <AccordionSummary id="panel3-header" expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
            pariatur debitis consectetur hic temporibus doloremque. Doloribus
            nemo minus dignissimos at, optio suscipit, sint hic incidunt
            repudiandae quasi harum labore vitae?
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default MuiAccordion;
