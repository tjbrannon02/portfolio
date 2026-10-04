import '../App.css'
import { FaGithub } from 'react-icons/fa'; // Import GitHub icon
import flowchart from '../assets/esp32/Flowchart.svg'
import feather from '../assets/esp32/Feather.png'
import devkit from '../assets/esp32/Devkit.png'
import circuit1 from '../assets/esp32/circuit.svg'
import circuit2 from '../assets/esp32/circuit1.svg'
import featherBox from '../assets/esp32/FeatherBox.png'
import c6Box from '../assets/esp32/C6Box.png'

function Esp32Project() {
  return (
    <main className="project-page">

      {/* Header */}
      <section className="project-hero">
        <p className="section-label">01 — ESP32 Audio Reminder System</p>

        <h1>
          IoT system designed to monitor room lighting and provide
          an audible reminder when lights are left on.
        </h1>

       <button 
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px', 
            padding: '10px 16px',
            fontSize: '16px',
            cursor: 'pointer',
            backgroundColor: '#000000ff', // GitHub's dark background color
            color: '#ffffff',           // White text and icon color
            border: '1px solid rgba(242, 245, 247, 1)',
            borderRadius: '6px',        // Rounded corners matching GitHub style
            fontWeight: '500'           // Slightly bolder text
          }}
          onClick={() => window.open('https://github.com/tjbrannon02/esp32-audio-reminder', '_blank')}
        >
          <FaGithub size={20}/> 
          View on GitHub
        </button>

      </section>


      {/* Overview */}
      <section className="project-detail-section">
        <p className="section-label">01 — Overview</p>

        <h2>The Problem</h2>

        <p className="section-text">
          Over the course of my first year of marriage, I noticed
          that the dining room light was frequently left on when
          my wife left the house. We did not have a smart home
          infrastructure, and installing a commercial system would
          have added unnecessary cost for a relatively simple problem.
        </p>

        <p className="section-text">
          Rather than purchasing an existing solution, I decided to
          design and build a small IoT system around hardware and
          components I already had access to.
        </p>

        <h2>The Solution</h2>

        <p className="section-text">
          The resulting system uses two ESP32 devices communicating
          through ESP-NOW. A sensor node monitors the dining room
          light level while a second ESP32 is positioned near the
          door and uses a reed switch to detect when the door is opened.
        </p>

        <p className="section-text">
          When the door is triggered, the main ESP32 checks the most
          recent light-level information received from the sensor node
          and determines whether the light was likely left on.
        </p>

        <h2>The Nodes</h2>

        <h3>ESP32 Door Node</h3>

        <div className="project-media">
          <img
            src={feather}
            alt="Image of ESP32 Feather V2"
          />
        </div>

        <h3>ESP32 Sensor Node</h3>

        <div className="project-media">
          <img
            src={devkit}
            alt="Image of ESP32 Devkit C"
          />
        </div>

      </section>


      {/* System Architecture */}
      <section className="project-detail-section">
        <p className="section-label">02 — System Architecture</p>

        <h2>Two ESP32 nodes divide sensing from user interaction.</h2>

        <div className="project-media">
          <img
            src={flowchart}
            alt="System architecture diagram for the ESP32 audio reminder system"
          />
        </div>

        <p className="section-text">
         The system is divided into a sensing node and a door-mounted
          interaction node. The sensor node monitors the dining room
          light level and transmits its latest reading using ESP-NOW.
          The door node uses a reed switch as the hardware trigger,
          evaluates the latest light-level reading, and selects the
          appropriate audio response.
        </p>
      </section>


      {/* Hardware */}
      <section className="project-detail-section">
        <p className="section-label">03 — Hardware</p>

        <h2>Circuit Diagrams</h2>

        <h3>Door Node</h3>

        <div className="project-media1">
          <img
            src={circuit1}
            alt="Circuit Diagram for Door Node"
          />
        </div>

        <h3>Sensor Node</h3>

        <div className="project-media1">
          <img
            src={circuit2}
            alt="Circuit Diagram for Door Node"
          />
        </div>

        <h2>Components</h2>

        <p className="section-text">
          • Adafruit ESP32 Feather V2
          <br />
          • ESP32-C6 DevKitC-1
          <br />
          • LDR light sensor
          <br />
          • Reed switch
          <br />
          • MAX98357A I2S amplifier
          <br />
          • 4Ω 3W mono enclosed speaker
          <br />
          • 10kΩ resistor
        </p>
      </section>


      {/* Software */}
      <section className="project-detail-section">
        <p className="section-label">04 — Software</p>

        <h2>Tools and Language</h2>

        <p className="section-text">
          • C/C++
          <br />
          • Arduino IDE
          <br />
          • ESP-NOW
          <br />
          • I2S audio
          <br />
          • LittleFS
        </p>

        <p className="section-text">
        View the source code on my GitHub! 
        </p>

      </section>


      {/* How It Works */}
      <section className="project-detail-section">
        <p className="section-label">05 — Implementation</p>

        <h2>How It Works</h2>

        <p className="section-text">
          1. Light Detection 
          <br />
          The sensor node sontinously monitors ambient 
          light using a photoresistor voltage divider. 
          The analog reading is compared against a predefined 
          threshhold to determine whether the room is illuminated 
          by the dining room light or not.
        </p>

        <p className="section-text">
          2. Wireless Communication 
          <br />
          The sensor node transmits its light-level readings to
           the door node using ESP-NOW, allowing the two microcontrollers
            to communicate without a Wi-Fi router or centralized smart-home hub.
        </p>

        <p className="section-text">
          3. Door State Detection 
          <br />
          A magnetic reed switch detects the doors state. When the door opens, 
          the door node evaluates the latest recieved light reading to determine which 
          audio clip to play.
        </p>

        <p className="section-text">
          4. Audio Playback 
          <br />
          Based on the lighting condition recieved, the ESP32 retrieves the corresponding 
          audio file from LittleFS and streams it through the I2S interface to the 
          MAX98357A amplifier, which drives the speaker.
        </p>

      </section>


      {/* Engineering Challenges */}
      <section className="project-detail-section">
        <p className="section-label">06 — Engineering Challenges</p>

        <h2>Engineering Challenges</h2>

        <h3>Challenge 01</h3>

        <p className="section-text">
          The primary challenge I encountered during this project occured while integrating 
          the audio playback functionality. I had successfully configured LittleFS and 
          uploaded the audio clips to the Feather V2's flash memory, but activating the 
          trigger produced no sound through the speaker.
        </p>

        <p className="section-text">
          After verifying that the speaker and amplifier functioned correctly when tested 
          independently, I narrowed the issue down to the audio files themselves. I was using 
          recordings captured with Apple's Voice Memos application, whose encoding was 
          incompatible with the BackgroundAudio.h library I had selected for playback.
          <br />
          To troubleshoot the issue, I first attempted to convert the original recordings to 
          MP3, but the playback problem persisted. I then used Audacity (an audio recording application) 
          to create new audio recordings and export them as WAV files with settings compatible 
          with the library. After uploading these new files to LittleFS and testing the system again, 
          I successfully achieved audio playback through the I2S interface and speaker.
          <br />
          This experience reinforced the importance of verifying not only hardware connections and 
          file storage, but also compatibility of audio formats and encoding parameters within the 
          software libraries responsible for processing them.
        </p>

      </section>


      {/* Demonstration */}
      <section className="project-detail-section">
        <p className="section-label">07 — Demonstration</p>

        <h2>Demonstration</h2>

        <p className="section-text">
          Watch the ESP32 Audio Reminder System detect lighting conditions,
          communicate between nodes, and deliver an audible reminder.
        </p>

        <div className="project-video">
          <iframe
            src="https://youtube.com/embed/6mIeC7CSXLc"
            title="ESP32 Audio Reminder System Demonstration"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </section>


      {/* Future Improvements */}
      <section className="project-detail-section">
        <p className="section-label">08 — Future Improvements</p>

        <h2>3D Printed Enclosure</h2>

        <p className="section-text">
          Below are the finished CAD designs for the node enclosures. Each has a different 
          design for the locking mechanism to test security of the enclosure. They have not yet 
          been printed.
        </p>

          <h3>Door Node Enclosure</h3>

          <div className="project-media">
          <img
            src={featherBox}
            alt="Image of ESP32 Feather V2 Enclosure"
          />
        </div>

        <h3>Sensor Node Enclosure</h3>

        <div className="project-media">
          <img
            src={c6Box}
            alt="Image of C6 Enclosure"
          />
        </div>

          <h2>Further Improvements</h2>

        <p className="section-text">
          • Custom PCB
          <br />
          • Improved power management
          <br />
          • Additional sensors for more light management
        </p>
      </section>

    </main>
  )
}

export default Esp32Project