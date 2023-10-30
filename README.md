# Reactive: Music Visualizer

## Application Details

### Name
* Reactive: Music Visualizer

### Description

> Reactive is a music visualizing application that lets users create reactive visuals using their favorite songs. This application is built for people of all ages. Creating your first visuals is easy-to-learn and only takes a few minutes! The three foundational models Reactive uses are templates, shapes, and effects. A template is a savable configuration of music-data (data rate, audio channel, frequency bin) and visual (shapes, effects) properties. A template has a canvas, the place where users can spawn pre-made shapes onto. Each template can hold a multitude of shapes, where each shape comes pre-packaged with five main visual effects users can toggle and modify. The effect options are fade, vertical shift, horizontal shift, scale, and rotate, all of which can be combined. When the user is ready, they can load a music file from their computer and play the song. While the song is playing, the audio analyzer will display the left/right audio channels of the song, as well as the frequencies and volumes in each audio channel. Using this information, users can connect their shapes and effects to the music-data endpoints, ultimately creating an ensemble of visuals that react to the music!

### Technologies

#### **Front-end**
> * Vite + React.js
> * Boostrap 5
> * HTML 5
> * CSS 3
> * JavaScript
> * REST Client
> * VSCode

> * audiomotion-analyzer
> * framer-motion
> * react-bootstrap
> * bootswatch
> * react-hot-toast

#### **Back-end**
> * Java
> * Spring Framework
> * Spring MVC
> * Spring Jdbc
> * IntelliJ

#### **Database**
> * MySQL

### First Time Setup

#### **Front-end**
> * Directory: ~/dev-10-capstone/reactive
> * Commands: npm install

#### **Back-end**
> * Directory: ~/dev-10-capstone/reactive-api/sql/reactive-tables-prod.sql
> * Commands: run script using MySQL

### Resources

#### **URLS**
* AudioMotion-Analyzer: https://www.npmjs.com/package/audiomotion-analyzer/v/4.3.0
* Framer-Motion: https://www.framer.com/motion/
* React-Bootstrap Documentation: https://react-bootstrap.netlify.app/
* Bootstrap 5 Documentation: https://getbootstrap.com/
* Bootswatch: https://bootswatch.com/
* React Hot Toast Documentation: https://react-hot-toast.com/
* Simple CSS-only Shapes: https://alvaromontoro.com/blog/68042/shapes-in-css
* React.js Naming Conventions: https://www.linkedin.com/pulse/react-js-naming-convention-kristiyan-velkov/
* CSS Element Positioning: https://developer.mozilla.org/en-US/docs/Web/CSS/position
* Project Presentation Slides Template: https://slidesgo.com/theme/programming-language-workshop-for-beginners#position-113&results-2841

## 1. Problem Statement

> Do you love music and videos? If so, you probably love watching music videos. Maybe you've thought to yourself, "It'd be so cool to make my own visuals for my favorite song!"
> 
> Researching how to create visuals for music frequently leads people to a multitude of obstacles that deters them from trying. You see that a majority of the tutorial content is created using paid application. The application requires several hours of practice to learn "basic" functionality and create "simple" visuals. Maybe you don't want complex, professional-level visuals.
> 
> **Reactive** can help with all of that! Reactive is a free and simple music visualizing application that lets you create reactive visuals using your favorite songs. This application is built for people of all ages. Creating your first visuals is easy-to-learn and only takes a few minutes! Soon, you'll be grinning excitedly at what **you** can create!

## 2. Technical Solution

> Create custom visuals for your favorite songs. Learning takes only a few minutes. Signup only required to save and load projects.
> 
> **Scenario 1:**
> Noel went to his first rave and left this experience feeling mesmerized by the orchestra of beautifully synchronized music and **visuals**. He feels inspired to create visuals for his favorite songs. He wants his visuals to react to particular sounds in his songs. He uses Reactive to **load** a music file. He's able to clearly see the **left/right audio channels**, **frequency bins**, and **volumes** of each frequency bin. He then selects a **shape** and applies a "grow" **effect** to it. After selecting his shape, he connects the effect to frequency bin #5. Now, when he plays his song, he sees that the shape he selected shrinks and grows proportionally to the volume of frequency bin #5!
> 
> **Scenario 2:**
> Yasmin knows that her daughter loves listening to music and playing with colorful shapes. She heard about Reactive from Noel and decides to let her daughter try it. Yasmin learns how to create her first visual with no problem, so she teaches her daughter how to use the application. Yasmin registers an account to make sure she can save her daughter's progress. Together, they create their first unfinished visuals, save them, and continue to build upon their work throughout the week until they have a show they're happy with.

## 3. Glossary

> **Template:** An arrangement of **shapes** with **effects**, placed on the application's **canvas**, that react to particular **frequencies bins** and their respective **volume**.
> 
> **Shapes:** Part of the visual experience. Shapes can look like: squares, circles, lines, etc. Shapes can have multiple effects, with each effect being tied to its own frequency bin and volume.
> 
> **Effects:** Part of the visual experience. Effects can be: rotate, spin, move left, move right, shrink, grow, etc. Every individual effect can be tied to one particular frequency bin, or be tied to completely different frequency bins.
> 
> **Frequency bins:** The average frequency of a tiny section on the frequency spectrum. In this application, there are 31 bins to choose from on the frequency spectrum. They look like colorful columns once music is playing. The 1st bin is on the far left while the 31st bin in on the far right.
> 
> **Frequency of sound:** Humans typically hear sounds in a range of frequencies, from 20 Hertz (low-pitched, bass) to 20,000 Hertz (high-pitched, treble). This is the range of frequencies that users can select from.
> 
> **Volume:** How loudly or quietly a frequency bin is played at. When a frequency bin is quiet, only a few blocks in the bin will be colored. When a frequency bin is loud, a majority of the blocks in the bin will be colored.
> 
> **Left/right-channel audio:** Most music is recorded with two audio channels to simulate the left/right audio we hear with our ears. Some songs also intentionally have a sound being played from one channel and not the other! Reactive's frequency spectrum shows you the left-channel audio on the top-half of the analyzer while the right-channel audio is shown on the bottom-half of the analyzer.

## 4. High Level Requirement
 
> Upload a music file (UNREGISTERED USER)
> 
> Play a music file (UNREGISTERED USER)
> 
> Add a shape to canvas (implies adding effects and connecting effects to frequency bins) (UNREGISTERED USER)
> 
> Play visuals (UNREGISTERED USER)
> 
> Save visuals (UNREGISTERED USER)
> 
> Load visuals (UNREGISTERED USER)

## 5. User Stories/Scenarios

> **Upload a music file**
> 
> Can upload a music file into the application. Used for creating visuals.
> 
> Precondition: UNREGISTERED USER must have a music file of any format on their computer.
> 
> Post-condition: None

> **Play a music file**
> 
> Can play a music file in the application. Used for creating visuals.
> 
> Precondition: UNREGISTERED USER must have already uploaded a music file of any format from their computer.
> 
> Post-condition: None

> **Add a shape to canvas**
> 
> Can add a shape to the canvas. Shapes have optional, toggleable effects. Multiple effects can be toggled simultaneously. Each effect can be independently connected to a frequency bin of the user's choice. (Connecting to a frequency bin is optional. Effects can also be given constant values or periodic functions for consistent motion.)
> 
> Precondition: None
> 
> Post-condition: None

> **Play visuals**
> 
> Can play visuals.
> 
> Precondition: A song is playing and there is at least one shape on the canvas that has at least one effect that is connected to a frequency bin.
> 
> Post-condition: None

> **Save visuals**
> 
> Can save visuals to database.
> 
> Precondition: UNREGISTERED USER must give template a name.
>
> Post-condition: None

> **Load visuals**
>
> Can load visuals from database.
> 
> Precondition: None
> 
> Post-condition: None