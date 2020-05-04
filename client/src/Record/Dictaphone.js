// import React, { Component } from "react";
// import PropTypes from "prop-types";
// import SpeechRecognition from "react-speech-recognition";

// const propTypes = {
//   // Props injected by SpeechRecognition
//   transcript: PropTypes.string,
//   resetTranscript: PropTypes.func,
//   browserSupportsSpeechRecognition: PropTypes.bool,
//   stopscript: PropTypes.stop
// };

// const Dictaphone = ({
//   transcript,
//   resetTranscript,
//   browserSupportsSpeechRecognition,
//   stopscript
// }) => {
//   if (!browserSupportsSpeechRecognition) {
//     return null;
//   }

//   return (
//     <div>
//       <button onClick={resetTranscript}>Reset</button>
//       <textarea id="w3mission" rows="25" cols="70" value = {transcript}></textarea>
//       <button onClick={stopscript}>Stop</button>
//     </div>
//   );
// };

// Dictaphone.propTypes = propTypes;

// export default SpeechRecognition(Dictaphone);