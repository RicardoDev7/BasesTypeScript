(() => {
    enum AudioLevel{
        min,
        medium,
        max
    }
    const currentAudio: AudioLevel = AudioLevel.medium;
    console.log(currentAudio);
    console.log(AudioLevel);
})();