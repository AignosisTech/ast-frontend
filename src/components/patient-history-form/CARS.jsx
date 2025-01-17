import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaArrowRight , FaArrowLeft} from "react-icons/fa";
import axios from "axios";
import { AppContext } from "../../AppContext";

const CARS = () => {
  const navigate = useNavigate();

  const [carsFormData, setCarsFormData] = useState({})
  const [questions] = useState([
    {
      section: "Relating to People",
      options: [
        {
          value: 1,
          description:
            "No evidence of difficulty or abnormality in relating to people: The child's behaviour is appropriate for his or her age. Some shyness, fussiness, or annoyance at being told what to do may be observed, but not to an atypical degree.",
        },
        {
          value: 1.5,
          description: "",
        },
        {
          value: 2,
          description:
            "Mildly abnormal relationships: The child may avoid looking the adult in the eye, avoid the adult or become fussy if interaction is forced, be excessively shy, not be as responsive to the adult as is typical, or cling to parents somewhat more than most children of the same age.",
        },
        {
          value: 2.5,
          description: "",
        },
        {
          value: 3,
          description:
            "Moderately abnormal relationships: The child shows aloofness (seems unaware of adult) at times. Persistent and forceful attempts are necessary to get the child's attention at times. Minimal contact is initiated by the child.",
        },
        {
          value: 3.5,
          description: "",
        },
        {
          value: 4,
          description:
            "Severely abnormal relationships: The child is consistently aloof or unaware of what the adult is doing. He or she almost never responds to or initiates contact with the adult. Only the most persistent attempts to get the child's attention have any effect.",
        },
      ],
    },
    {
      section: "Imitation",
      options: [
        {
          value: 1,
          description:
            "Appropriate imitation: The child can imitate sounds, words, and movements that are appropriate for his or her skill level.",
        },
        {
          value: 1.5,
          description: "",
        },
        {
          value: 2,
          description:
            "Mildly abnormal imitation: The child imitates simple behaviours such as clapping or single verbal sounds most of the time; occasionally, imitates only after prodding or after a delay.",
        },
        {
          value: 2.5,
          description: "",
        },
        {
          value: 3,
          description:
            "Moderately abnormal imitation: The child imitates only part of the time and requires a great deal of persistence and help from the adult; frequently imitates only after a delay.",
        },
        {
          value: 3.5,
          description: "",
        },
        {
          value: 4,
          description:
            "Severely abnormal imitation: The child rarely or never imitates sounds, words, or movements even with prodding and assistance from the adult.",
        },
      ],
    },
    {
      section: "Emotional Response",
      options: [
        {
          value: 1,
          description:
            "Age-appropriate and situation-appropriate emotional response: The child shows the appropriate type and degree of emotional response, as indicated by a change in facial expression, posture, and manner.",
        },
        {
          value: 1.5,
          description: "",
        },
        {
          value: 2,
          description:
            "Mildly abnormal emotional response: The child occasionally displays a somewhat inappropriate type or degree of emotional reaction. Reactions are sometimes unrelated to the objects or events surrounding him or her.",
        },
        {
          value: 2.5,
          description: "",
        },
        {
          value: 3,
          description:
            "Moderately abnormal emotional response: The child shows definite signs of inappropriate type and/or degree of emotional response. Reactions may be quite inhibited or excessive and unrelated to the situation; child may grimace, laugh, or become rigid even though no apparent emotion-producing objects or events are present.",
        },
        {
          value: 3.5,
          description: "",
        },
        {
          value: 4,
          description:
            "Severely abnormal emotional response: Responses are seldom appropriate to the situation; once the child gets in a certain mood, it is very difficult to change the mood. Conversely, the child may show wildly different emotions when nothing has changed.",
        },
      ],
    },
    {
      section: "Body Use",
      options: [
        {
          value: 1,
          description:
            "Age-appropriate body use. The child moves with the same ease, agility, and coordination as a normal child of the same age.",
        },
        {
          value: 1.5,
          description: "",
        },
        {
          value: 2,
          description:
            "Mildly abnormal body use. Some minor peculiarities may be present, such as clumsiness, repetitive movements, poor coordination, or the rare appearance of more unusual movements.",
        },
        {
          value: 2.5,
          description: "",
        },
        {
          value: 3,
          description:
            "Moderately abnormal body use. Behaviours that are clearly strange or unusual for a child of this age may include strange finger movements, peculiar finger or body posturing, staring or picking at the body, self-directed aggression, rocking, spinning finger-wiggling, or toe-walking.",
        },
        {
          value: 3.5,
          description: "",
        },
        {
          value: 4,
          description:
            "Severely abnormal body use. Intense or frequent movements of the type listed above are signs of severely abnormal body use. These behaviours may persist despite attempts to discourage them or involve the child in other activities.",
        },
      ],
    },
    {
      section: "Object Use",
      options: [
        {
          value: 1,
          description:
            "Appropriate interest in, or use of, toys and other objects. The child shows normal interest in toys and other objects appropriate for his or her skill level and uses these toys in an appropriate manner.",
        },
        {
          value: 1.5,
          description: "",
        },
        {
          value: 2,
          description:
            "Mildly inappropriate interest in, or use of, toys and other objects. The child may show atypical interest in a toy or play with it in an inappropriately childish way (e.g., banging or sucking on the toy).",
        },
        {
          value: 2.5,
          description: "",
        },
        {
          value: 3,
          description:
            "Moderately inappropriate interest in, or use of, toys and other objects. The child may show little interest in toys or other objects, or may be preoccupied with using an object or toy in some strange way. He or she may focus on some insignificant part of a toy, become fascinated with light reflecting off the object, repetitively move some part of the object, or play with one object exclusively.",
        },
        {
          value: 3.5,
          description: "",
        },
        {
          value: 4,
          description:
            "Severely inappropriate interest in, or use of, toys and other objects. The child may engage in the same behaviours as above, with greater frequency and intensity. The child is difficult to distract when engaged in these inappropriate activities.",
        },
      ],
    },
    {
      section: "Adaptation to Change",
      options: [
        {
          value: 1,
          description:
            "Age-appropriate adaptation to change. While the child may notice or comment on changes in routine, he or she accepts these changes without undue distress.",
        },
        {
          value: 1.5,
          description: "",
        },
        {
          value: 2,
          description:
            "Mildly abnormal adaptation to change. When an adult tries to change tasks, the child may continue the same activity or use the same materials.",
        },
        {
          value: 2.5,
          description: "",
        },
        {
          value: 3,
          description:
            "Moderately abnormal adaptation to change. The child actively resists changes in routine, tries to continue the old activity, and is difficult to distract. He or she may become angry and unhappy when an established routine is altered.",
        },
        {
          value: 3.5,
          description: "",
        },
        {
          value: 4,
          description:
            "Severely abnormal adaptation to change. The child shows severe reaction to change. If a change is forced, he or she may become extremely angry or uncooperative and respond with tantrums.",
        },
      ],
    },
    {
      section: "Visual Response",
      options: [
        {
          value: 1,
          description:
            "Age-appropriate visual response. The child's visual behaviour is normal and appropriate for his or her age. Vision is used together with other senses as a way to explore a new object.",
        },
        {
          value: 1.5,
          description: "",
        },
        {
          value: 2,
          description:
            "Mildly abnormal visual response. The child must be occasionally reminded to look at objects. The child may be more interested in looking at mirrors or lighting than are his or her peers, may occasionally stare off into space, or may also avoid looking people in the eye.",
        },
        {
          value: 2.5,
          description: "",
        },
        {
          value: 3,
          description:
            "Moderately abnormal visual response. The child must be reminded frequently to look at what he or she is doing. He or she may stare into space, avoid looking people in the eye, look at objects from an unusual angle, or hold objects very close to the eyes.",
        },
        {
          value: 3.5,
          description: "",
        },
        {
          value: 4,
          description:
            "Severely abnormal visual response. The child consistently avoids looking at people or certain objects and may show extreme forms of other visual peculiarities described above.",
        },
      ],
    },
    {
      section: "Listening Response",
      options: [
        {
          value: 1,
          description:
            "Age-appropriate listening response. The child responds normally to voices and other sounds in the environment.",
        },
        {
          value: 1.5,
          description: "",
        },
        {
          value: 2,
          description:
            "Mildly abnormal listening response. The child may respond inconsistently to voices or other sounds. For example, the child might sometimes fail to respond when his or her name is called or might seem overly interested in certain sounds.",
        },
        {
          value: 2.5,
          description: "",
        },
        {
          value: 3,
          description:
            "Moderately abnormal listening response. The child often does not respond to sounds, especially voices, even when the sounds are loud or repeated. Alternatively, the child may show unusual or excessive responses to certain sounds.",
        },
        {
          value: 3.5,
          description: "",
        },
        {
          value: 4,
          description:
            "Severely abnormal listening response. The child rarely or never responds to voices or sounds in the environment or responds in a highly unusual way.",
        },
      ],
    },
    {
      section: "Taste, Smell, and Touch Response and Use",
      options: [
        {
          value: 1,
          description:
            "Age-appropriate responses to taste, smell, and touch. The child explores objects with taste, smell, and touch in a manner appropriate for his or her age.",
        },
        {
          value: 1.5,
          description: "",
        },
        {
          value: 2,
          description:
            "Mildly abnormal responses to taste, smell, and touch. The child may exhibit some unusual behaviour, such as smelling or tasting objects that are not food or rejecting certain textures.",
        },
        {
          value: 2.5,
          description: "",
        },
        {
          value: 3,
          description:
            "Moderately abnormal responses to taste, smell, and touch. The child frequently shows unusual or excessive responses, such as licking, smelling, or excessive avoidance of objects or textures.",
        },
        {
          value: 3.5,
          description: "",
        },
        {
          value: 4,
          description:
            "Severely abnormal responses to taste, smell, and touch. The child consistently engages in inappropriate behaviours such as licking or smelling objects, or shows extreme avoidance or distress when exposed to certain textures.",
        },
      ],
    },
    {
      section: "Fear or Nervousness",
      options: [
        {
          value: 1,
          description:
            "Appropriate fear or nervousness. The child shows an age-appropriate level of caution or fear in response to unfamiliar people, objects, or situations.",
        },
        {
          value: 1.5,
          description: "",
        },
        {
          value: 2,
          description:
            "Mildly abnormal fear or nervousness. The child occasionally shows either excessive fearfulness or a lack of fear where it would be expected.",
        },
        {
          value: 2.5,
          description: "",
        },
        {
          value: 3,
          description:
            "Moderately abnormal fear or nervousness. The child frequently shows inappropriate fear or a complete lack of caution, putting him or her at risk in dangerous situations.",
        },
        {
          value: 3.5,
          description: "",
        },
        {
          value: 4,
          description:
            "Severely abnormal fear or nervousness. The child consistently reacts with extreme fear or shows no fear in situations where fear would be expected.",
        },
      ],
    },
    {
      section: "Verbal Communication",
      options: [
        {
          value: 1,
          description:
            "Age-appropriate verbal communication. The child speaks and understands words and sentences appropriate for his or her age.",
        },
        {
          value: 1.5,
          description: "",
        },
        {
          value: 2,
          description:
            "Mildly abnormal verbal communication. The child’s speech may occasionally seem immature or unusual in tone, content, or pattern.",
        },
        {
          value: 2.5,
          description: "",
        },
        {
          value: 3,
          description:
            "Moderately abnormal verbal communication. The child frequently uses speech that is abnormal in content, tone, or pattern, such as repeating phrases or talking about inappropriate topics. Speech may also be limited.",
        },
        {
          value: 3.5,
          description: "",
        },
        {
          value: 4,
          description:
            "Severely abnormal verbal communication. The child rarely or never speaks, or speech is highly unusual and limited to repeating phrases or making sounds that have little apparent meaning.",
        },
      ],
    },
    {
      section: "Nonverbal Communication",
      options: [
        {
          value: 1,
          description:
            "Age-appropriate nonverbal communication. The child uses gestures, facial expressions, and body language appropriately for his or her age.",
        },
        {
          value: 1.5,
          description: "",
        },
        {
          value: 2,
          description:
            "Mildly abnormal nonverbal communication. The child may occasionally fail to use or respond to gestures, facial expressions, or body language appropriately.",
        },
        {
          value: 2.5,
          description: "",
        },
        {
          value: 3,
          description:
            "Moderately abnormal nonverbal communication. The child frequently fails to use or respond to nonverbal cues appropriately, such as gestures or facial expressions.",
        },
        {
          value: 3.5,
          description: "",
        },
        {
          value: 4,
          description:
            "Severely abnormal nonverbal communication. The child rarely or never uses or responds to nonverbal communication, appearing unaware of the significance of gestures or facial expressions.",
        },
      ],
    },
    {
      section: "Activity Level",
      options: [
        {
          value: 1,
          description:
            "Appropriate activity level. The child’s activity level is typical for his or her age.",
        },
        {
          value: 1.5,
          description: "",
        },
        {
          value: 2,
          description:
            "Mildly abnormal activity level. The child may occasionally seem unusually active or inactive for his or her age.",
        },
        {
          value: 2.5,
          description: "",
        },
        {
          value: 3,
          description:
            "Moderately abnormal activity level. The child’s activity level is frequently inappropriate, either being excessively active or lethargic.",
        },
        {
          value: 3.5,
          description: "",
        },
        {
          value: 4,
          description:
            "Severely abnormal activity level. The child’s activity level is consistently extreme, showing hyperactivity or hypoactivity that is very difficult to manage.",
        },
      ],
    },
    {
      section: "Level and Consistency of Intellectual Response",
      options: [
        {
          value: 1,
          description:
            "Age-appropriate intellectual response. The child shows curiosity, problem-solving skills, and learning appropriate for his or her age.",
        },
        {
          value: 1.5,
          description: "",
        },
        {
          value: 2,
          description:
            "Mildly abnormal intellectual response. The child’s intellectual responses may occasionally seem immature, delayed, or inconsistent.",
        },
        {
          value: 2.5,
          description: "",
        },
        {
          value: 3,
          description:
            "Moderately abnormal intellectual response. The child often shows limited or inconsistent intellectual responses, such as difficulty solving problems or a lack of curiosity.",
        },
        {
          value: 3.5,
          description: "",
        },
        {
          value: 4,
          description:
            "Severely abnormal intellectual response. The child consistently shows little or no intellectual curiosity or problem-solving ability.",
        },
      ],
    },
    {
      section: "General Impressions",
      options: [
        {
          value: 1,
          description:
            "Normal behaviour. The child’s overall behaviour is typical for his or her age.",
        },
        {
          value: 1.5,
          description: "",
        },
        {
          value: 2,
          description:
            "Mildly abnormal behaviour. The child occasionally displays behaviours that are slightly unusual or atypical.",
        },
        {
          value: 2.5,
          description: "",
        },
        {
          value: 3,
          description:
            "Moderately abnormal behaviour. The child frequently displays unusual or atypical behaviours that are noticeable to others.",
        },
        {
          value: 3.5,
          description: "",
        },
        {
          value: 4,
          description:
            "Severely abnormal behaviour. The child consistently displays behaviours that are highly atypical or troubling.",
        },
      ],
    },
  ]);

  const {testData, setTestData} = useContext(AppContext);

  var index = 0;
  useEffect(() => {
    questions.map((question) => {
      if (index !== questions.length - 1) {
        carsFormData[`section-${index}`] = "";
        index++;
      }
    });

    console.log(carsFormData);
  }, []);

  const handleBackClick = () => {
    if (testData.dataCollectionMode.includes('ISAA')) {
        // Redirect to INCLEN if dataCollectionMode contains INCLEN
        navigate('/ISAA');
      } 
    else if (testData.dataCollectionMode.includes('INCLEN')) {
      // Redirect to INCLEN if dataCollectionMode contains INCLEN
      navigate('/INCLEN');
    } else {
      // Handle the back functionality in other cases, e.g., going back to the previous page
      navigate('/Error');
    }
  };
  const handleNext = (e) => {
    e.preventDefault();

    console.log('cars form data is ', carsFormData);
    let carsscore = 0;
    for (const key in carsFormData) {
      if (carsFormData[key]) {
        carsscore += parseFloat(carsFormData[key]);
      }
    }

  console.log("CARS Total Score:", carsscore);
    
    setTestData({
      ...testData,
      carsFormData: carsFormData,
      carsscore: carsscore,
    });

    try {
      // Add validation or data processing here
      navigate("/patienthistory");
    } catch (error) {
      console.error("Error during navigation:", error);
    }
  };

  return (
    <div style={styles.container}>
      {/* Sidebar Section */}

      <div style={styles.sidebar}>
        <center>
          <h1 style={styles.logo}>Ai.gnosis</h1>
          <div style={styles.sidebarContent}>
            <h2 style={styles.sidebarTitle}>CARS</h2>
            <p style={styles.sidebarDescription}>
              The Childhood Autism Rating Scale, Second Edition (CARS II) is a
              diagnostic tool used to identify and assess the severity of autism
              spectrum disorder (ASD) in children.
            </p>
            <p style={styles.sidebarDetails}>
              It evaluates behaviors across areas like social interaction,
              communication, emotional responses, and sensory sensitivities.
              Combining direct observation with input from parents or
              caregivers, it provides a comprehensive developmental profile.
            </p>
          </div>
          <h3 className="font-semibold mb-2 text-sm text-white">
            Fill Google Form Instead? <a href="https://docs.google.com/forms/d/e/1FAIpQLSd_dXebCWKaocA7KpAxWJAyHGfEwsqiDvAgXk0tj4ZQa0bYhg/viewform">click here</a>
          </h3> 
        </center>
      </div>

      {/* Form Section */}
      <div style={styles.formContainer}>
        <h2 style={styles.formTitle}>
          CHILDHOOD AUTISM RATING SCALE, SECOND EDITION (CARS II)
        </h2>

        {/* Patient Information */}
        <form onSubmit={handleNext}>
          {/* Checklist Section */}
          <div style={styles.checklistSection}>
            {[
              {
                section: "Relating to People",
                options: [
                  {
                    value: 1,
                    description:
                      "No evidence of difficulty or abnormality in relating to people: The child's behaviour is appropriate for his or her age. Some shyness, fussiness, or annoyance at being told what to do may be observed, but not to an atypical degree.",
                  },
                  {
                    value: 1.5,
                    description: "",
                  },
                  {
                    value: 2,
                    description:
                      "Mildly abnormal relationships: The child may avoid looking the adult in the eye, avoid the adult or become fussy if interaction is forced, be excessively shy, not be as responsive to the adult as is typical, or cling to parents somewhat more than most children of the same age.",
                  },
                  {
                    value: 2.5,
                    description: "",
                  },
                  {
                    value: 3,
                    description:
                      "Moderately abnormal relationships: The child shows aloofness (seems unaware of adult) at times. Persistent and forceful attempts are necessary to get the child's attention at times. Minimal contact is initiated by the child.",
                  },
                  {
                    value: 3.5,
                    description: "",
                  },
                  {
                    value: 4,
                    description:
                      "Severely abnormal relationships: The child is consistently aloof or unaware of what the adult is doing. He or she almost never responds to or initiates contact with the adult. Only the most persistent attempts to get the child's attention have any effect.",
                  },
                ],
              },
              {
                section: "Imitation",
                options: [
                  {
                    value: 1,
                    description:
                      "Appropriate imitation: The child can imitate sounds, words, and movements that are appropriate for his or her skill level.",
                  },
                  {
                    value: 1.5,
                    description: "",
                  },
                  {
                    value: 2,
                    description:
                      "Mildly abnormal imitation: The child imitates simple behaviours such as clapping or single verbal sounds most of the time; occasionally, imitates only after prodding or after a delay.",
                  },
                  {
                    value: 2.5,
                    description: "",
                  },
                  {
                    value: 3,
                    description:
                      "Moderately abnormal imitation: The child imitates only part of the time and requires a great deal of persistence and help from the adult; frequently imitates only after a delay.",
                  },
                  {
                    value: 3.5,
                    description: "",
                  },
                  {
                    value: 4,
                    description:
                      "Severely abnormal imitation: The child rarely or never imitates sounds, words, or movements even with prodding and assistance from the adult.",
                  },
                ],
              },
              {
                section: "Emotional Response",
                options: [
                  {
                    value: 1,
                    description:
                      "Age-appropriate and situation-appropriate emotional response: The child shows the appropriate type and degree of emotional response, as indicated by a change in facial expression, posture, and manner.",
                  },
                  {
                    value: 1.5,
                    description: "",
                  },
                  {
                    value: 2,
                    description:
                      "Mildly abnormal emotional response: The child occasionally displays a somewhat inappropriate type or degree of emotional reaction. Reactions are sometimes unrelated to the objects or events surrounding him or her.",
                  },
                  {
                    value: 2.5,
                    description: "",
                  },
                  {
                    value: 3,
                    description:
                      "Moderately abnormal emotional response: The child shows definite signs of inappropriate type and/or degree of emotional response. Reactions may be quite inhibited or excessive and unrelated to the situation; child may grimace, laugh, or become rigid even though no apparent emotion-producing objects or events are present.",
                  },
                  {
                    value: 3.5,
                    description: "",
                  },
                  {
                    value: 4,
                    description:
                      "Severely abnormal emotional response: Responses are seldom appropriate to the situation; once the child gets in a certain mood, it is very difficult to change the mood. Conversely, the child may show wildly different emotions when nothing has changed.",
                  },
                ],
              },
              {
                section: "Body Use",
                options: [
                  {
                    value: 1,
                    description:
                      "Age-appropriate body use. The child moves with the same ease, agility, and coordination as a normal child of the same age.",
                  },
                  {
                    value: 1.5,
                    description: "",
                  },
                  {
                    value: 2,
                    description:
                      "Mildly abnormal body use. Some minor peculiarities may be present, such as clumsiness, repetitive movements, poor coordination, or the rare appearance of more unusual movements.",
                  },
                  {
                    value: 2.5,
                    description: "",
                  },
                  {
                    value: 3,
                    description:
                      "Moderately abnormal body use. Behaviours that are clearly strange or unusual for a child of this age may include strange finger movements, peculiar finger or body posturing, staring or picking at the body, self-directed aggression, rocking, spinning finger-wiggling, or toe-walking.",
                  },
                  {
                    value: 3.5,
                    description: "",
                  },
                  {
                    value: 4,
                    description:
                      "Severely abnormal body use. Intense or frequent movements of the type listed above are signs of severely abnormal body use. These behaviours may persist despite attempts to discourage them or involve the child in other activities.",
                  },
                ],
              },
              {
                section: "Object Use",
                options: [
                  {
                    value: 1,
                    description:
                      "Appropriate interest in, or use of, toys and other objects. The child shows normal interest in toys and other objects appropriate for his or her skill level and uses these toys in an appropriate manner.",
                  },
                  {
                    value: 1.5,
                    description: "",
                  },
                  {
                    value: 2,
                    description:
                      "Mildly inappropriate interest in, or use of, toys and other objects. The child may show atypical interest in a toy or play with it in an inappropriately childish way (e.g., banging or sucking on the toy).",
                  },
                  {
                    value: 2.5,
                    description: "",
                  },
                  {
                    value: 3,
                    description:
                      "Moderately inappropriate interest in, or use of, toys and other objects. The child may show little interest in toys or other objects, or may be preoccupied with using an object or toy in some strange way. He or she may focus on some insignificant part of a toy, become fascinated with light reflecting off the object, repetitively move some part of the object, or play with one object exclusively.",
                  },
                  {
                    value: 3.5,
                    description: "",
                  },
                  {
                    value: 4,
                    description:
                      "Severely inappropriate interest in, or use of, toys and other objects. The child may engage in the same behaviours as above, with greater frequency and intensity. The child is difficult to distract when engaged in these inappropriate activities.",
                  },
                ],
              },
              {
                section: "Adaptation to Change",
                options: [
                  {
                    value: 1,
                    description:
                      "Age-appropriate adaptation to change. While the child may notice or comment on changes in routine, he or she accepts these changes without undue distress.",
                  },
                  {
                    value: 1.5,
                    description: "",
                  },
                  {
                    value: 2,
                    description:
                      "Mildly abnormal adaptation to change. When an adult tries to change tasks, the child may continue the same activity or use the same materials.",
                  },
                  {
                    value: 2.5,
                    description: "",
                  },
                  {
                    value: 3,
                    description:
                      "Moderately abnormal adaptation to change. The child actively resists changes in routine, tries to continue the old activity, and is difficult to distract. He or she may become angry and unhappy when an established routine is altered.",
                  },
                  {
                    value: 3.5,
                    description: "",
                  },
                  {
                    value: 4,
                    description:
                      "Severely abnormal adaptation to change. The child shows severe reaction to change. If a change is forced, he or she may become extremely angry or uncooperative and respond with tantrums.",
                  },
                ],
              },
              {
                section: "Visual Response",
                options: [
                  {
                    value: 1,
                    description:
                      "Age-appropriate visual response. The child's visual behaviour is normal and appropriate for his or her age. Vision is used together with other senses as a way to explore a new object.",
                  },
                  {
                    value: 1.5,
                    description: "",
                  },
                  {
                    value: 2,
                    description:
                      "Mildly abnormal visual response. The child must be occasionally reminded to look at objects. The child may be more interested in looking at mirrors or lighting than are his or her peers, may occasionally stare off into space, or may also avoid looking people in the eye.",
                  },
                  {
                    value: 2.5,
                    description: "",
                  },
                  {
                    value: 3,
                    description:
                      "Moderately abnormal visual response. The child must be reminded frequently to look at what he or she is doing. He or she may stare into space, avoid looking people in the eye, look at objects from an unusual angle, or hold objects very close to the eyes.",
                  },
                  {
                    value: 3.5,
                    description: "",
                  },
                  {
                    value: 4,
                    description:
                      "Severely abnormal visual response. The child consistently avoids looking at people or certain objects and may show extreme forms of other visual peculiarities described above.",
                  },
                ],
              },
              {
                section: "Listening Response",
                options: [
                  {
                    value: 1,
                    description:
                      "Age-appropriate listening response. The child responds normally to voices and other sounds in the environment.",
                  },
                  {
                    value: 1.5,
                    description: "",
                  },
                  {
                    value: 2,
                    description:
                      "Mildly abnormal listening response. The child may respond inconsistently to voices or other sounds. For example, the child might sometimes fail to respond when his or her name is called or might seem overly interested in certain sounds.",
                  },
                  {
                    value: 2.5,
                    description: "",
                  },
                  {
                    value: 3,
                    description:
                      "Moderately abnormal listening response. The child often does not respond to sounds, especially voices, even when the sounds are loud or repeated. Alternatively, the child may show unusual or excessive responses to certain sounds.",
                  },
                  {
                    value: 3.5,
                    description: "",
                  },
                  {
                    value: 4,
                    description:
                      "Severely abnormal listening response. The child rarely or never responds to voices or sounds in the environment or responds in a highly unusual way.",
                  },
                ],
              },
              {
                section: "Taste, Smell, and Touch Response and Use",
                options: [
                  {
                    value: 1,
                    description:
                      "Age-appropriate responses to taste, smell, and touch. The child explores objects with taste, smell, and touch in a manner appropriate for his or her age.",
                  },
                  {
                    value: 1.5,
                    description: "",
                  },
                  {
                    value: 2,
                    description:
                      "Mildly abnormal responses to taste, smell, and touch. The child may exhibit some unusual behaviour, such as smelling or tasting objects that are not food or rejecting certain textures.",
                  },
                  {
                    value: 2.5,
                    description: "",
                  },
                  {
                    value: 3,
                    description:
                      "Moderately abnormal responses to taste, smell, and touch. The child frequently shows unusual or excessive responses, such as licking, smelling, or excessive avoidance of objects or textures.",
                  },
                  {
                    value: 3.5,
                    description: "",
                  },
                  {
                    value: 4,
                    description:
                      "Severely abnormal responses to taste, smell, and touch. The child consistently engages in inappropriate behaviours such as licking or smelling objects, or shows extreme avoidance or distress when exposed to certain textures.",
                  },
                ],
              },
              {
                section: "Fear or Nervousness",
                options: [
                  {
                    value: 1,
                    description:
                      "Appropriate fear or nervousness. The child shows an age-appropriate level of caution or fear in response to unfamiliar people, objects, or situations.",
                  },
                  {
                    value: 1.5,
                    description: "",
                  },
                  {
                    value: 2,
                    description:
                      "Mildly abnormal fear or nervousness. The child occasionally shows either excessive fearfulness or a lack of fear where it would be expected.",
                  },
                  {
                    value: 2.5,
                    description: "",
                  },
                  {
                    value: 3,
                    description:
                      "Moderately abnormal fear or nervousness. The child frequently shows inappropriate fear or a complete lack of caution, putting him or her at risk in dangerous situations.",
                  },
                  {
                    value: 3.5,
                    description: "",
                  },
                  {
                    value: 4,
                    description:
                      "Severely abnormal fear or nervousness. The child consistently reacts with extreme fear or shows no fear in situations where fear would be expected.",
                  },
                ],
              },
              {
                section: "Verbal Communication",
                options: [
                  {
                    value: 1,
                    description:
                      "Age-appropriate verbal communication. The child speaks and understands words and sentences appropriate for his or her age.",
                  },
                  {
                    value: 1.5,
                    description: "",
                  },
                  {
                    value: 2,
                    description:
                      "Mildly abnormal verbal communication. The child’s speech may occasionally seem immature or unusual in tone, content, or pattern.",
                  },
                  {
                    value: 2.5,
                    description: "",
                  },
                  {
                    value: 3,
                    description:
                      "Moderately abnormal verbal communication. The child frequently uses speech that is abnormal in content, tone, or pattern, such as repeating phrases or talking about inappropriate topics. Speech may also be limited.",
                  },
                  {
                    value: 3.5,
                    description: "",
                  },
                  {
                    value: 4,
                    description:
                      "Severely abnormal verbal communication. The child rarely or never speaks, or speech is highly unusual and limited to repeating phrases or making sounds that have little apparent meaning.",
                  },
                ],
              },
              {
                section: "Nonverbal Communication",
                options: [
                  {
                    value: 1,
                    description:
                      "Age-appropriate nonverbal communication. The child uses gestures, facial expressions, and body language appropriately for his or her age.",
                  },
                  {
                    value: 1.5,
                    description: "",
                  },
                  {
                    value: 2,
                    description:
                      "Mildly abnormal nonverbal communication. The child may occasionally fail to use or respond to gestures, facial expressions, or body language appropriately.",
                  },
                  {
                    value: 2.5,
                    description: "",
                  },
                  {
                    value: 3,
                    description:
                      "Moderately abnormal nonverbal communication. The child frequently fails to use or respond to nonverbal cues appropriately, such as gestures or facial expressions.",
                  },
                  {
                    value: 3.5,
                    description: "",
                  },
                  {
                    value: 4,
                    description:
                      "Severely abnormal nonverbal communication. The child rarely or never uses or responds to nonverbal communication, appearing unaware of the significance of gestures or facial expressions.",
                  },
                ],
              },
              {
                section: "Activity Level",
                options: [
                  {
                    value: 1,
                    description:
                      "Appropriate activity level. The child’s activity level is typical for his or her age.",
                  },
                  {
                    value: 1.5,
                    description: "",
                  },
                  {
                    value: 2,
                    description:
                      "Mildly abnormal activity level. The child may occasionally seem unusually active or inactive for his or her age.",
                  },
                  {
                    value: 2.5,
                    description: "",
                  },
                  {
                    value: 3,
                    description:
                      "Moderately abnormal activity level. The child’s activity level is frequently inappropriate, either being excessively active or lethargic.",
                  },
                  {
                    value: 3.5,
                    description: "",
                  },
                  {
                    value: 4,
                    description:
                      "Severely abnormal activity level. The child’s activity level is consistently extreme, showing hyperactivity or hypoactivity that is very difficult to manage.",
                  },
                ],
              },
              {
                section: "Level and Consistency of Intellectual Response",
                options: [
                  {
                    value: 1,
                    description:
                      "Age-appropriate intellectual response. The child shows curiosity, problem-solving skills, and learning appropriate for his or her age.",
                  },
                  {
                    value: 1.5,
                    description: "",
                  },
                  {
                    value: 2,
                    description:
                      "Mildly abnormal intellectual response. The child’s intellectual responses may occasionally seem immature, delayed, or inconsistent.",
                  },
                  {
                    value: 2.5,
                    description: "",
                  },
                  {
                    value: 3,
                    description:
                      "Moderately abnormal intellectual response. The child often shows limited or inconsistent intellectual responses, such as difficulty solving problems or a lack of curiosity.",
                  },
                  {
                    value: 3.5,
                    description: "",
                  },
                  {
                    value: 4,
                    description:
                      "Severely abnormal intellectual response. The child consistently shows little or no intellectual curiosity or problem-solving ability.",
                  },
                ],
              },
              {
                section: "General Impressions",
                options: [
                  {
                    value: 1,
                    description:
                      "Normal behaviour. The child’s overall behaviour is typical for his or her age.",
                  },
                  {
                    value: 1.5,
                    description: "",
                  },
                  {
                    value: 2,
                    description:
                      "Mildly abnormal behaviour. The child occasionally displays behaviours that are slightly unusual or atypical.",
                  },
                  {
                    value: 2.5,
                    description: "",
                  },
                  {
                    value: 3,
                    description:
                      "Moderately abnormal behaviour. The child frequently displays unusual or atypical behaviours that are noticeable to others.",
                  },
                  {
                    value: 3.5,
                    description: "",
                  },
                  {
                    value: 4,
                    description:
                      "Severely abnormal behaviour. The child consistently displays behaviours that are highly atypical or troubling.",
                  },
                ],
              },
            ].map((item, index) => (
              <div key={index} style={styles.sectionContainer}>
                <h3 style={styles.sectionTitle}>{item.section}</h3>
                <table style={styles.table}>
                  <thead>
                    <tr>
                      <th style={styles.tableHeader}>Option</th>
                      <th style={styles.tableHeader}>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {item.options.map((option, optIndex) => (
                      <tr key={optIndex}>
                        <td style={styles.tableCell}>
                          <label>
                            <input
                              type="radio"
                              name={`section-${index}`}
                              value={option.value}
                              style={styles.radioInput}
                              onChange={(e) => {
                                setCarsFormData((prevData) => ({
                                  ...prevData,
                                  [`section-${index}`]: e.target.value,
                                }));
    
                                console.log(carsFormData);
                              }}
                            />
                            &nbsp;&nbsp;
                            {option.value}
                          </label>
                        </td>
                        <td style={styles.tableCell}>{option.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>

          {/* Centered Next Button */}
          <div style={styles.buttonContainer}>
            <button onClick={handleBackClick} style={styles.nextButton}>
                        <div style={styles.iconContainer}>
                          <FaArrowLeft style={styles.icon} />
                        </div>
                        &nbsp;&nbsp;
                        <strong>Back</strong>
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button type="submit" style={styles.nextButton}>
              <strong>Next</strong>
              <div style={styles.iconContainer}>
                <FaArrowRight style={styles.icon} />
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Inline Styles
const styles = {
  container: {
    //   display: "flex",
    // height: "100vh",

    backgroundColor: "#1e0a2d",
    color: "#e6e6e6",
    fontFamily: "Montserrat, sans-serif",
    padding: "2rem",
  },
  sidebar: {
    flex: 1,
    padding: "2rem",
    color: "#e6e6e6",
  },
  logo: {
    fontSize: "2rem",
    color: "#f7aef8",
  },
  sidebarContent: {
    marginTop: "2rem",
  },
  sidebarTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  sidebarDescription: {
    marginTop: "1rem",
    fontSize: "1rem",
    lineHeight: "1.5",
  },
  formContainer: {
    flex: 2,
    padding: "2rem",
    backgroundColor: "#26173e",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    margin: "2rem",
  },
  formTitle: {
    fontSize: "1.8rem",
    textAlign: "center",
    marginBottom: "1.5rem",
  },
  formGroup: {
    marginBottom: "1rem",
  },
  label: {
    display: "block",
    marginBottom: "0.5rem",
  },
  input: {
    width: "100%",
    padding: "0.5rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  radioGroup: {
    display: "flex",
    gap: "1rem",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "2rem",
  },
  tableHeader: {
    borderBottom: "2px solid #f7aef8",
    padding: "0.5rem",
    textAlign: "left",
  },
  tableCell: {
    padding: "0.5rem",
    borderBottom: "1px solid #ccc",
  },
  radioCell: {
    textAlign: "center",
  },
  radio: {
    accentColor: "#f7aef8",
  },
  radioInput: {
    width: "1rem", // Adjust size as needed
    height: "1rem", // Adjust size as needed
    accentColor: "#f7aef8", // Optional: For custom color
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
  },
  nextButton: {
    display: "flex",
    alignItems: "center",
    padding: "0.5rem 1rem",
    backgroundColor: "#4d0076",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  iconContainer: {
    marginLeft: "0.5rem",
  },
  icon: {
    fontSize: "1rem",
  },
};

export default CARS;
