function renderDisplay(input: string, setDisplay: React.Dispatch<React.SetStateAction<string[]>>, postExecuteFunction: Function | null = null) {
    input = input.toLowerCase();
    const companyPercent = `0`;
    const experimentationWeather = ``;
    const assuranceWeather = ``;
    const vowWeather = ``;
    const offenseWeather = ``;
    const marchWeather = ``;
    const RendWeather = ``;
    const dineWeather = ``;
    const titanWeather = ``;
    if (input.includes("info")) {
        if (input.includes("company")) {
            setDisplay([
                `The Company is buying your goods at ${companyPercent}%.`,
                ``,
                `Go here to drop off any valuable scrap you've`,
                `collected while on the job. The rate of return`,
                `updates hourly and fluctuates over the course of`,
                `several days.`,
                ``
            ])
        } else if (input.includes("exp")) {
            setDisplay([
                `41-Experimentation`,
                `----------------------`,
                `CONDITIONS: Arid. Low habitability, worsened by`,
                `industrial artifacts.`,
                ``,
                `HISTORY: Not discovered for quite some time due to`,
                `its close orbit around gas giant Big Grin. However`,
                `it appears to have been used in secret.`,
                ``,
                `FAUNA: Unknown`,
                ``
            ])
        } else if (input.includes("ass")) {
            setDisplay([
                `220-Assurance`,
                `----------------------`,
                `CONDITIONS: Similar to its twin moon, 41-`,
                `Experimentation, featureing far more jagged and`,
                `weathered terrain.`,
                ``,
                `HISTORY: 220-Assurance is far younger than its`,
                `counterpart. Discovered not long before 41-`,
                `Experimentation`,
                ``,
                `FAUNA: Unknown`,
                ``
            ])
        } else if (input.includes("vow")) {
            setDisplay([
                `56-Vow`,
                `----------------------`,
                `CONDITIONS: Humid.`,
                ``,
                `HISTORY: Vow appears to have been inhabited by`,
                `several colonies across its continents, but there`,
                `is now no sign of life, and they have become a`,
                `mystery.`,
                ``,
                `FAUNA: Diverse, teemng with plant life`,
                ``
            ])
        } else if (input.includes("off")) {
            setDisplay([
                `21-Offense`,
                `----------------------`,
                `CONDITIONS: Believed to have splintered off from`,
                `its cousin Assurance, Offense features similar`,
                `jagged and dry conditions but differes in its`,
                `ecosystem`,
                ``,
                `HISTORY: 21-Offense is categorized as an asteroid`,
                `moon and seems to have not existed on its own for`,
                `more than several hundred years. The industrial`,
                `artifacts here have suffered damage; it's believed`,
                `they were built long before 21-Offense was`,
                `splintered off.`,
                ``,
                `FAUNA: A competitive and toughened ecosystem`,
                `supports aggressive lifeforms. Travellers to 21-`,
                `Offense should know it's not for the faint of`,
                `heart.`,
                ``
            ])
        } else if (input.includes("off")) {
            setDisplay([
                `71-March`,
                `----------------------`,
                `CONDITIONS: March undergoes constant drizzling`,
                `weather. Its terrain is more expansive.`,
                ``,
                `HISTORY: This moon is overlooked due to its twin`,
                `moon, Vow.`,
                ``,
                `FAUNA: Unknown`,
                ``
            ])
        } else if (input.includes("rend")) {
            setDisplay([
                `85-Rend`,
                `----------------------`,
                `CONDITIONS: Its planet orbits white dwarf star,`,
                `making for inhospitable, cold conditions. Constant`,
                `blizzards decrease visibility.`,
                ``,
                `HISTORY: Several famous travelers went missing`,
                `here, giving it some reputation. Their bodies are`,
                `unlikely to be found due to the planet's`,
                `conditions.`,
                ``,
                `FAUNA: It's highly unlikely for complex life to`,
                `exist here.`,
                ``
            ])
        } else if (input.includes("dine")) {
            setDisplay([
                `7-Dine`,
                `----------------------`,
                `CONDITIONS: Its planet orbits white dwarf star,`,
                `making for inhospitable, cold conditions. Constant`,
                `blizzards decrease visibility.`,
                ``,
                `HISTORY: Several famous travelers went missing`,
                `here, giving it some reputation. Their bodies are`,
                `unlikely to be found due to the planet's`,
                `conditions.`,
                ``,
                `FAUNA: It's highly unlikely for complex life to`,
                `exist here.`,
                ``
            ])
        } else if (input.includes("titan")) {
            setDisplay([
                `8-Titan`,
                `----------------------`,
                `CONDITIONS: A frozen, flat landscape.`,
                ``,
                `HISTORY: It looks like this moon was mined for`,
                `resources. It's easy to get lost within the giant`,
                `industrial complex. There are many entrances to it`,
                `littered about the landscape.`,
                ``,
                `FAUNA: Dangerous entities have been rumored to take`,
                `residence in the vast network of tunnels.`,
                ``
            ])
        } else if (input.includes("walk")) {
            setDisplay([
                `Useful for keeping in touch! Here other players`,
                `when the wakie talkie is in your inventory. Must be`,
                `in your hand and pressed down to transmit voice.`,
                ``
            ])
        } else if (input.includes("flash")) {
            setDisplay([
                `The most affordable light source. It's even`,
                `waterproof!`,
                ``
            ])
        } else if (input.includes("shovel")) {
            setDisplay([
                `For self-defense!`,
                ``
            ])
        } else if (input.includes("lock")) {
            setDisplay([
                `Lock-pickers will unlock your limitless potential`,
                `for efficiency on the job. Powered by proprietary`,
                `AI software, they will get you access through any`,
                `locked door.`,
                ``
            ])
        } else if (input.includes("pro")) {
            setDisplay([
                `With an extra battery life and even brighter bulb,`,
                `your colleagues can never leave you in the dark`,
                `again!`,
                ``
            ])
        } else if (input.includes("boom")) {
            setDisplay([
                `These jamming tunes are great for a morale boost on`,
                `your crew!`,
                ``
            ])
        } else if (input.includes("tzp")) {
            setDisplay([
                `This safe and legal medicine can be administered to`,
                `see great benefits to your performance on the job!`,
                `Your ability to move LONG distances while carrying`,
                `HEFTY objects will be second to none! Warning: TZP`,
                `gas may impact the brain with extended exposure.`,
                `Follow instructions manual provided with the`,
                `canister.`,
                `Don't forget to share!`,
                ``,
            ])
        } else if (input.includes("zap")) {
            setDisplay([
                `The most specialised self-protective equipment,`,
                `capable of sending upwards of 80,000 volts!`,
                ``,
                `To keep it targeted as long as possible, pull the`,
                `gun side-to-side to counter the bend and fight`,
                `against the pull of the electric beam. It can only`,
                `stun for as long as you keep the current flowing.`,
                ``
            ])
        } else if (input.includes("jet")) {
            setDisplay([
                `THis device will get you around anywhere! Just use`,
                `it responsibly!`,
                ``,
            ])
        } else if (input.includes("ext")) {
            setDisplay([
                `The extension ladder can reach as high as nine`,
                `meters! Use it to scale any clif and reach for the`,
                `stars! To save batteries the extension ladder`,
                `automatically stores itself after 18 seconds.`,
                ``
            ])
        } else if (input.includes("rad")) {
            setDisplay([
                `Radar boosters come with many uses!,`,
                ``,
                `Use the "SWITCH" command before the radar booster's`,
                `name to view it on the main monitor. It must be`,
                `activated.`,
                ``,
                `Use the "PING" command before the radar booster's`,
                `name to play a special sound from the device.`,
                ``
            ])
        } else if (input.includes("loud")) {
            setDisplay([
                `Used to communicate with any crew memeber from any`,
                `distance, no walkie talkie required! The horn can`,
                `be heard from anywhere. But what does it mean?`,
                `That's up to you!`,
                ``
            ])
        } else if (input.includes("inv")) {
            setDisplay([
                `The inverse teleporter is a modified teleporter`,
                `which will teleport you to a random position`,
                `outside the ship. All your items will be dropped at`,
                `the teleporter before transport. The inverse`,
                `teleporter can be sued by everyone at once and has`,
                `a 3.5 minute cooldown.`,
                ``,
                `DISCLAIMER: The inverse teleporter can only`,
                `transport you out, not in, and you may become`,
                `trapped. The Company is not reseponsible for injury`,
                `or replacement of heads and limbs induced by`,
                `quantum entanglement and bad luck.`,
                ``
            ])
        } else if (input.includes("tel")) {
            setDisplay([
                `Press the button to activate the teleporter. It`,
                `will teleport whoever is currently being monitored`,
                `on the ship's radar. They will not be able to keep`,
                `any of their held items through the teleport. It`,
                `takes about ten seconds to recharge.`,
                ``
            ])
        } else if (input.includes("roaming locusts")) {
            setDisplay([
                `Roaming Locusts`,
                ``,
                `Sigurd's danger level: 0%`,
                ``,
                `Scientific name: Anacridium-vega`,
                ``,
                `Known as roaming locusts, this is a species of`,
                `grasshopper. Unliek some species which are more`,
                `prone to jump or fly, roaming locusts are almost`,
                `never grounded and stay close together even when in`,
                `smaller numbers. They will quickly disperse when a`,
                `predator disrupts them but are highly attracted to`,
                `light.`,
                ``
            ])
        } else {
            setDisplay([
                `[This action was not compatible with this object.]`,
                ``
            ])
        }
    } else if (input === `help`) {
        setDisplay([
            `>MOONS`,
            `To see the list of moons the autopilot can route`,
            `to.`,
            ``,
            `>STORE`,
            `To sett the company store's selection of useful`,
            `items.`,
            ``,
            `>BESTIARY`,
            `To see the list of wildlife on record.`,
            ``,
            `>STORAGE`,
            `To access objects placed into storage.`,
            ``,
            `>OTHER`,
            `To see the list of other commands`,
            ``,
            ``
        ])
    } else if (input === `moons`) {
        setDisplay([
            `Welcome to the exomoons catalogue.`,
            `to route the autopilot to a moon, use the word`,
            `ROUTE.`,
            `To learn more about any moon, use the word INFO.`,
            `----------------------------`,
            `* The Company Building   //   Buying at ${companyPercent}%`,
            ``,
            `* Experimentation${experimentationWeather ? ` (${experimentationWeather})` : ``}`,
            `* Assurance${assuranceWeather ? ` (${assuranceWeather})` : ``}`,
            `* Vow${vowWeather ? ` (${vowWeather})` : ``}`,
            ``,
            `* Offense${offenseWeather ? ` (${offenseWeather})` : ``}`,
            `* March${marchWeather ? ` (${marchWeather})` : ``}`,
            ``,
            `* Rend${RendWeather ? ` (${RendWeather})` : ``}`,
            `* Dine${dineWeather ? ` (${dineWeather})` : ``}`,
            `* Titan${titanWeather ? ` (${titanWeather})` : ``}`,
            ``
        ])
    } else if (input === `store`) {
        setDisplay([
            `Welcome to the Company store.`,
            `Use words BUY and INFO on any item.`,
            `Order tools in bulk by typing a number`,
            `----------------------------`,
            ``,
            ``,
            `* Walkie-talkie   //   Price: ▪️12`,
            `* Flashlight   //   Price: ▪️15`,
            `* Shovel   //   Price: ▪️30`,
            `* Lockpicker   //   Price: ▪️20`,
            `* Pro-flashlight   //   Price: ▪️25`,
            `* Stun grenade   //   Price: ▪️40`,
            `* Boombox   //   Price: ▪️60`,
            `* TZP-Inhalent   //   Price: ▪️120`,
            `* Zap gun   //   Price: ▪️400`,
            `* Jetpack   //   Price: ▪️700`,
            `* Extension ladder   //   Price: ▪️60`,
            `* Radar-booster   //   Price: ▪️50`,
            ``,
            `SHIP UPGRADES:`,
            `* Loud horn   //   Price: ▪️150`,
            `* Teleporter   //   Price: ▪️375`,
            `* Inverse Teleporter   //   Price: ▪️425`,
            ``,
            `The selection of ship decor rotates per-quota. Be`,
            `sure to check back next week:`,
            `----------------------------`,
            ``,
            `Shower   //   ▪️180`,
            `Hazard suit   //   ▪️90`,
            `Toilet   //   ▪️160`,
            `Cozy lights   //   ▪️140`,
            ``
        ])
    } else if (input === `bestiary`) {
        setDisplay([
            `BESTIARY`,
            ``,
            `To access a creature file, type "INFO" after its`,
            `name.`,
            `---------------------------------`,
            ``,
            ``,
            `Roaming locusts`,
            ``,
            ``
        ])
    } else if (input === `storage`) {
        setDisplay([
            `While moving furnature with [B], you can press [X]`,
            `to send it to storage. You can call it back from`,
            `storage here.`,
            ``,
            `These are the items in storage:`,
            ``,
            `[No items stored. While moving an object with B,`,
            `press X to store it.]`,
            ``
        ])
    } else if (input === `other`) {
        setDisplay([
            `Other commands:.`,
            ``,
            `There are no other commands`,
            ``
        ])
    } else {
        setDisplay([
            `[There was no object supplied with the action, or`,
            `your word was typed incorrectly or does not exist.]`,
            ``
        ])
    }
    if (postExecuteFunction) {
        postExecuteFunction();
    }
}

export default renderDisplay;