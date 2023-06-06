export default function generateRandomDarkColor() {
    const minBrightness = 20; // Minimum brightness value (0-255)
    const maxBrightness = 100; // Maximum brightness value (0-255)

    const randomValue = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
    const r = randomValue(minBrightness, maxBrightness);
    const g = randomValue(minBrightness, maxBrightness);
    const b = randomValue(minBrightness, maxBrightness);

    return `rgb(${r}, ${g}, ${b})`;
}