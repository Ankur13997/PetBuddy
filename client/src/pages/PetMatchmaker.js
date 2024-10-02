import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
  Fade,
} from "@mui/material";
import { styled } from "@mui/system";
import Header from "./Header";
import Footer from "./Footer";
import PageHeader from "./PageHeader";
// Custom animation for the final result
const ResultBox = styled(Box)({
  animation: "fadeInUp 0.8s ease-out",
  "@keyframes fadeInUp": {
    "0%": { opacity: 0, transform: "translateY(20px)" },
    "100%": { opacity: 1, transform: "translateY(0)" },
  },
});

const PetMatchmaker = () => {
  const [quizStep, setQuizStep] = useState(0);
  const [answers, setAnswers] = useState({
    petType: "",
    livingSpace: "",
    timeForPet: "",
    hypoallergenic: "",
    children: "",
    energyLevel: "",
    lifespan: "",
  });
  const [result, setResult] = useState(null);
  const [error, setError] = useState(false); // State for validation error

  // Questions Array
  const questions = [
    {
      question: "What type of pet are you looking for?",
      name: "petType",
      options: ["Dog", "Cat", "Bird", "Fish"],
    },
    {
      question: "How much space do you have for a pet?",
      name: "livingSpace",
      options: ["Small Apartment", "Medium Home", "Large Home"],
    },
    {
      question: "How much time can you dedicate to pet care each day?",
      name: "timeForPet",
      options: ["Less than 1 hour", "1-3 hours", "More than 3 hours"],
    },
    {
      question: "Are you looking for a hypoallergenic pet?",
      name: "hypoallergenic",
      options: ["Yes", "No"],
    },
    {
      question: "Do you have children at home?",
      name: "children",
      options: ["Yes", "No"],
    },
    {
      question: "Do you prefer a high-energy pet or a low-energy one?",
      name: "energyLevel",
      options: ["High Energy", "Low Energy"],
    },
    {
      question: "How important is the pet’s lifespan to you?",
      name: "lifespan",
      options: ["Short", "Medium", "Long"],
    },
  ];

  // Handle answer change
  const handleAnswerChange = (event) => {
    setError(false); // Clear error on selection
    setAnswers({
      ...answers,
      [event.target.name]: event.target.value,
    });
  };

  // Next Step
  const handleNext = () => {
    // Check if the current question has an answer before moving to the next
    if (!answers[questions[quizStep].name]) {
      setError(true); // Show error if no option is selected
      return;
    }
    if (quizStep < questions.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      calculateResult();
    }
  };

  // Logic for calculating the result
  const calculateResult = () => {
    if (answers.petType === "Dog") {
      if (answers.energyLevel === "High Energy") {
        if (answers.livingSpace === "Large Home") {
          setResult(
            "We suggest a high-energy dog like a Border Collie or a Labrador! With plenty of space, these dogs can thrive in your home."
          );
        } else if (answers.livingSpace === "Medium Home") {
          setResult(
            "Consider a medium-sized, high-energy dog like an Australian Shepherd or a Dalmatian. They require some space but can adapt to medium homes."
          );
        } else {
          setResult(
            "A high-energy dog like a Jack Russell Terrier or a Miniature Pinscher may suit your small living space. These dogs need mental and physical stimulation."
          );
        }
      } else if (answers.energyLevel === "Low Energy") {
        if (answers.livingSpace === "Large Home") {
          setResult(
            "For a large home, a low-energy dog like a Basset Hound or a Bernese Mountain Dog would be perfect. They enjoy lounging but still love the occasional outdoor activity."
          );
        } else if (answers.livingSpace === "Medium Home") {
          setResult(
            "A low-energy dog like a Bulldog or a Cocker Spaniel would be ideal for your medium home. They are calm and adaptable to indoor life."
          );
        } else {
          setResult(
            "Consider a low-energy dog like a Shih Tzu or a Cavalier King Charles Spaniel. These breeds are well-suited for apartment living and enjoy short walks."
          );
        }
      }
    } else if (answers.petType === "Cat") {
      if (answers.hypoallergenic === "Yes") {
        if (answers.energyLevel === "High Energy") {
          setResult(
            "A high-energy, hypoallergenic cat like a Balinese or a Siberian would be a great choice. They are playful and relatively allergy-friendly."
          );
        } else {
          setResult(
            "A hypoallergenic and calm cat like a Russian Blue or a Devon Rex would be ideal for you. These cats are independent and low-maintenance."
          );
        }
      } else {
        if (answers.energyLevel === "High Energy") {
          setResult(
            "A high-energy cat like a Bengal or a Siamese would fit your lifestyle. They are playful and interactive, requiring plenty of stimulation."
          );
        } else {
          setResult(
            "For a calm, independent cat, consider a British Shorthair or a Ragdoll. They are known for their relaxed nature and are great companions."
          );
        }
      }
    } else if (answers.petType === "Bird") {
      if (answers.timeForPet === "More than 3 hours") {
        setResult(
          "If you have plenty of time, a parrot like an African Grey or a Macaw might suit you. They are intelligent and require lots of interaction."
        );
      } else if (answers.timeForPet === "1-3 hours") {
        setResult(
          "Consider a bird like a cockatiel or a conure. These birds enjoy interaction but can also entertain themselves when needed."
        );
      } else {
        setResult(
          "A bird like a finch or a canary would be ideal for you. They require minimal attention and are content with a peaceful environment."
        );
      }
    } else if (answers.petType === "Fish") {
      if (answers.lifespan === "Long") {
        setResult(
          "If you're looking for a long-lived fish, consider a Koi or a Goldfish. They can live for many years with proper care."
        );
      } else if (answers.lifespan === "Medium") {
        setResult(
          "A Betta fish or Guppies would be great choices for a medium lifespan. They are colorful and easy to care for."
        );
      } else {
        setResult(
          "For a shorter lifespan, Tetras or Zebra Danios are colorful options that are easy to maintain."
        );
      }
    } else {
      setResult(
        "Based on your responses, we need more information to make a suggestion. Please try refining your answers."
      );
    }
  };

  return (
    <>
      <Header />
      <PageHeader title="Pet Matcher" imageSrc="/images/blog.png" />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh", // Vertically center the form
          backgroundColor: "#f7f8fa",
        }}
      >
        <Box
          sx={{
            padding: "30px",
            maxWidth: "600px",
            textAlign: "center",
            background: "#fff",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              marginBottom: "30px",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Find Your Perfect Pet Match
          </Typography>

          {result ? (
            <ResultBox
              sx={{
                padding: "20px",
                backgroundColor: "#fef9f9",
                borderRadius: "8px",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "#ff5722",
                  fontWeight: "bold",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                {result}
              </Typography>
            </ResultBox>
          ) : (
            <Fade in={true}>
              <Box>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    marginBottom: "20px",
                    fontFamily: "'Poppins', sans-serif",
                    color: "#333",
                  }}
                >
                  {questions[quizStep].question}
                </Typography>

                <FormControl component="fieldset">
                  <RadioGroup
                    name={questions[quizStep].name}
                    value={answers[questions[quizStep].name]}
                    onChange={handleAnswerChange}
                  >
                    {questions[quizStep].options.map((option, index) => (
                      <FormControlLabel
                        key={index}
                        value={option}
                        control={<Radio sx={{ color: "#ff5722" }} />}
                        label={option}
                        sx={{
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>

                {error && (
                  <Typography
                    variant="body2"
                    color="error"
                    sx={{
                      marginTop: "10px",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    Please select an option before proceeding.
                  </Typography>
                )}

                <Box
                  sx={{
                    marginTop: "20px", // Ensure the button is below the options
                  }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    sx={{
                      padding: "10px 20px",
                      backgroundColor: "#ff5722",
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: "16px",
                      fontWeight: "bold",
                      "&:hover": {
                        backgroundColor: "#e64a19",
                      },
                    }}
                  >
                    {quizStep === questions.length - 1 ? "Get Results" : "Next"}
                  </Button>
                </Box>
              </Box>
            </Fade>
          )}
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default PetMatchmaker;
