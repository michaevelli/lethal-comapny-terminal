import getRandomStats from "./getRandomFunctions";

function renderDisplay(input: string, setDisplay: React.Dispatch<React.SetStateAction<string[]>>, postExecuteFunction: Function | null = null) {
    input = input.toLowerCase();
    const stats = getRandomStats()
    if (input === "jess") {
        setDisplay([
            ``,
            ``,
            ``,
            ``,
            ``,
            `n`,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            ``,
            `JESTER`,
            ``,
            `Sigurd's danger level: 90% Get out o fthere before`,
            `it goes APE!! You cant hide from it, just evacuate`,
            ``,
            `Scientific name: INSANEUS THINGUS`,
            `THERE'S NO FREACKING SCIENTIFC RECORD! good luck,`,
            `you know as much as us. we just call it the jester`,
            ``
        ])
    } else if (input.includes("info")) {
        if (input.includes("company")) {
            setDisplay([
                `The Company is buying your goods at ${stats.company.percentage}%.`,
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
        } else if (input.includes("mar")) {
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
        } else if (input.includes("ren")) {
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
        } else if (input.includes("din")) {
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
        } else if (input.includes("tit")) {
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
        } else if (
            input.includes("roaming locusts")
            || input.includes("roam")
            || input.includes("loc")
        ) {
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
        } else if (
            input.includes("manticoils")
            || input.includes("mant")
        ) {
            setDisplay([
                `Manticoils`,
                ``,
                `Sigurd's danger level: 0%`,
                ``,
                `Scientific name: Quadrupes-manta`,
                `Mantacoils are a passerine bird of the family`,
                `corvidae. Their bodies are quite large compared to`,
                `their early descendants, and their wingspan ranges`,
                `from 55 to 64 inches. Their most defining`,
                `characteristic is their set of four wings. Their`,
                `back wings are mostly used to stabilize when at low`,
                `speed, while their front two wings create the`,
                `majority of lift. Their round bodies are a striking`,
                `yellow but with black outlines or strips along`,
                `their primary (rear) feathers.`,
                ``,
                `Manticoils mostly feed on small insects but can`,
                `also feed on small rodents. They are highly`,
                `intelligent and social. They pose little threat and`,
                `have a generally passive temperament towards`,
                `humans, although they are capable of transmitting`,
                `Rabies, Rubenchloria, and Pitt Virus.`,
            ])
        } else if (
            input.includes("bracken")
            || input.includes("brac")
        ) {
            setDisplay([
                `Bracken -- AKA flower man!`,
                ``,
                `it was flower man, you can't say otherwise! i wanted`,
                `to find his body .You were the cowards`,
                ``,
                `Scientific name: Rapax-folium`,
                `There is debate on the genus to which the Bracken`,
                `belongs. It is a bipedal vertebrate with skin the`,
                `color and texture of a red beat. The name was`,
                `coined for what appear to be leaves protruding from`,
                `its upper spine. The purpose of these is believed`,
                `to be for intimidation, however not much is known`,
                `about the specifics of bracken behaviour due to its`,
                `illusiveness and low population.`,
                ``,
                `We know a little from accounts by wildlife experts`,
                `who have encountered it. is a lone hunter with high`,
                `intelligence. ITs behaviour can seem aloof; it`,
                `exhibits high aggression even when unprovoked, yet`,
                `it quickly backs off when confronted. However,`,
                `brackens are known to up their hostility when`,
                `cornered or simply watched for a long time. For`,
                `this reason it's recommended to keep an eye on it`,
                `but not to stare it down. No specimens have been`,
                `collected dead or alive. It's theorized that upon`,
                `death their bodies undergo a rapid decomposition`,
                `process which is unique from other large animals.`,
                ``
            ])
        } else if (
            input.includes("circuit bees")
            || input.includes("cir")
            || input.includes("bee")
        ) {
            setDisplay([
                `Circuit Bees`,
                ``,
                `Sigurd's danger level: 90%`,
                ``,
                `Scientific name: Crabro-coruscus`,
                `The circuit bee, also known as red bee, is a`,
                `eusocial flying insect of the genus Apis, a`,
                `decendent of the honey bee. Their appearance is`,
                `quite recognizable from their hariy, red bodies and`,
                `two sets of wings. Like their ancestors, they are`,
                `well-known for their inteligent social BEEhavior,`,
                `large colony size, building wax nests which they`,
                `use to store honey, and their important role in`,
                `polination. Unlike the honey bee, which often`,
                `chose high places such as trees to construct its`,
                `hive, red bees create their hives on the ground.`,
                ``,
                `Red bees are highly defensive. They will leave the`,
                `nest to attack any creature that comes within`,
                `several meters, leaving BEEhind only the queen and`,
                `drone bees. This bold BEEhavior is enabled by their`,
                `most defining aBEElity, which is their`,
                `electrostatic charge. Red bees produce friction`,
                `with the iar. They also produce friction by rubbing`,
                `their two pairs of wings against each other and by`,
                `rubbing against one another while in the hive. What`,
                `allows them to create such a surplus of electric`,
                `field compared to the honey bee is still under`,
                `research, as they generate a stronger electric`,
                `field when panicked or angered. This ability is`,
                `especially useful for them around water.`,
                ``,
                ``,
                `It's BEEst to keep your distance. If a red bee hive`,
                `is stolen, red bee swarms will enter an onslaught`,
                `in which they attack any living creature. This`,
                `destructive BEEhavior will last until they have`,
                `located the hive or completely exhausted`,
                `themselves, which can take hours to days. They have`,
                `BEEn known to leave BEEhind fields of bodies of`,
                `small rodents, insects and even some larger`,
                `mammals, and in rare cases they can start fires.`,
                `Their strong BEEnefits and drawbacks to their`,
                `ecosystems are highly debated. BEEbated !! - the`,
                `indomitable Sigurd`,
                ``
            ])
        } else if (
            input.includes("baboon hawk")
            || input.includes("bab")
            || input.includes("hawk")
        ) {
            setDisplay([
                `Baboon hawk`,
                ``,
                `Sigurd's danger level: 75%`,
                ``,
                `Scientific name: Papio-volturis`,
                `Baboon hawks are a primate of the family`,
                `Cercapithecidae. They are hunchbacked but can stand`,
                `up to 8 feet on average. Their heads are boney,`,
                `with bird-like beacks and long horns, which they use`,
                `like skewers to gore and feed on prey. Their horns`,
                `are made of keratin instead of bone like the rest`,
                `of their skulls, and they do not contain nerves or`,
                `blood vessels. As a result baboon hawks can often`,
                `break their horns from the force they apply, then`,
                `fully regrow them within the same season. Baboon`,
                `hawks partly owe their name to their large wings,`,
                `which could never carry their large body mass and`,
                `are used instead for intimidation and protection`,
                `from the elements.`,
                ``,
                `The largest baboon hawk troop ever observed was`,
                `made up of 18 baboon hawks. They are loosely`,
                `territorial, and much of their behavior is`,
                `motivated by intimidation and display. They can`,
                `become collectors, using any flashy or colorful`,
                `object to mark their territory. As lone scouts,`,
                `baboon hawks are generally timid and won't attack`,
                `unless provoked. In greater numbers they can become`,
                `a great danger; sticking close to others and making`,
                `yourself seem dangerous are the best ways to`,
                `prevent an attack. They prefer smaller mammals, but`,
                `when desparate they are known to use their numbers`,
                `to attack animals even twice their size, such as`,
                `eyeless dogs. THEY TOOK M Y PICKLES`,
                ``
            ])
        } else if (
            input.includes("bunker spider")
            || input.includes("bunk")
            || input.includes("spi")
        ) {
            setDisplay([
                `Bunker spiders`,
                ``,
                `Sigurd's danger level: 20%`,
                ``,
                `Scientific name: Mutinum-ficedula`,
                `Bunker spiders, of the genus Theraphosa, are the`,
                `largest arachnid found int he Thistle Nebula and`,
                `the second largest ever discovered. It's believed`,
                `they evolved to prey on large mammals over the`,
                `course of a measly several hundred years after the`,
                `Boat made its trip around the Thistle Nebula.`,
                `(Refer to: Speculation on Increased Speciation)`,
                `Around the Fading Nebulae)`,
                ``,
                `Bunker spiders produce silk and lay it around their`,
                `chosen nesting area, then wait for it to be tripped`,
                `on. They can be seen waiting on walls, often over`,
                `doorways where prey could enter unaware. If you`,
                `find a bunker spider 'unprepared' it may freeze as`,
                `a defensive reaction. In this case they are best`,
                `left alone. If a bunker spider reacts aggressively,`,
                `it is best not to fight with ordinary tools. They`,
                `use their webs to make up for their rather slow`,
                `movement, so take node of your surroundings. Their`,
                `webs can be broken easily with any blunt tool.`, 
                ``,
                `Bunker spiders can pose a great danger to humans`,
                `and urban explorers especially, without a great`,
                `benefit to their ecosystems. A resulting kil-on-`,
                `sight order has been informally agreed upon between`,
                `many states home to the Bunker spider, and it is`,
                `currently approved by the ITDA as of 10/6/2497.`,
                ``
            ])
        } else if (
            input.includes("thumpers")
            || input.includes("thu")
        ) {
            setDisplay([
                `Thumpers`,
                ``,
                `Sigurd's danger level: 90%`,
                ``,
                `Scientific name: Pistris-saevus`,
                `Halves, or Thumpers, are a highly aggressive,`,
                `carnivorous species of the order Chondrichthyes.`,
                `Their skeletons are cartilaginous, giving their`,
                `bodies a stretchy and rubbery quality. Their name`,
                `comes from the fact they must eat their bottom legs`,
                `in order to escape the shell of their hatched egg;`,
                `their bottom legs are hardly functional to begin`,
                `with. Their arms, or front legs, are very string,`,
                `and they occasionally use them to stomp prey. They`,
                `can reach great speeds in a straight line.`,
                ``,
                `They are relentless hunters, typically at the top`,
                `of their food chain. Their main weaknesses are`,
                `their intelligence and complete lack of hearing. If`,
                `you come across a thumper, your best means of`,
                `survival are leaving its line of sight, as it is`,
                `slower around corners and can't easily track prey.`,
                ``,
                `Due to the fast and volatile evolution of this`,
                `species, some theorize that thumpers are one of the`,
                `examples of an increased number of mutations`,
                `causing higher levels of speciation in planets`,
                `around the Thistle Nebula`,
                ``
            ])
        } else if (input.includes("hygro")) {
            setDisplay([
                `HYGRODERE`,
                ``,
                `Sigurd's danger level: 0%, if you're faster than a`,
                `snail!`,
                ``,
                `Scientific name: Hygrodere`,
                `A eukaryotic organism classified within the`,
                `paraphyletic group Prostita. With the incredible`,
                `speed of reproduction, these small organisms can`,
                `multiply to millions. Hygrodere rarely split apart,`,
                `instead choosing to form large, viscous masses`,
                `which can take up large amounts of space and become`,
                `a danger to deal with, requiring large tools or`,
                `lures to relocate.`,
                ``,
                `Hygrodere are drawn to heat and ozygen and can`,
                `detect it from seemingly anywhere. There's almost`,
                `nothing organic they can't convert to their own`,
                `body mass. Nothing has been found to poison them.`,
                `constantly replacing themsleves, they can persist`,
                `for hundreds of thousands of years. If you ever`,
                `find yourself cornered, find a tall object to stand`,
                `on top of, hygroderes have trouble climbing. they`,
                `have greate taste! cause I made a friend with one`,
                `somehow,, and we think it was my music.`,
                ``,
            ])
        } else if (
            input.includes("hoarding")
            || input.includes("hoa")
            || input.includes("bug")
        ) {
            setDisplay([
                `HOARDING BUG`,
                ``,
                `Sigurd's danger level: 0%`,
                ``,
                `Scientific name: Linepithema-crassus`,
                `Hoarding bugs (of the order Hymenoptera) are large,`,
                `social insects. While often found living alone,`,
                `they have been found to share their nests with`,
                `members of their own species. They measure a height`,
                `of 3 feet on average, with bulbous bodies. The`,
                `thinness of their fluid and blood and the material`,
                `of their carapaces contributes to their low weight,`,
                `making them capable of flight with their membranous`,
                `wings. It also makes their bodies somewhat`,
                `transparent.`,
                ``,
                `Hoarding bugs were given their name due to their`,
                `territorial nature. Once they have chosen a place`,
                `as their nest, they will seek to adorn it with any`,
                `object they can find and will protect these objects`,
                `as part of the nest. Hoarding bugs are not so`,
                `dangerous alone as they are in large hives.`,
                `However, if left alone, hoarding bugs are`,
                `surprisingly neutral and pose little danger. wWw`,
                `love the stupid cuddle bugs.!! - tjhis has been a`,
                `note from the indomitable Sigurd`,
                ``
            ])
        } else if (input.includes("coil")) {
            setDisplay([
                `COIL-HEADS`,
                ``,
                `Sigurd's danger level: 80%`,
                ``,
                `Scientific name: Vir colligerus`,
                `Vir colligerus, or colloquially named Coil-heads,`,
                `have not been studied extensively due to their`,
                `extreme unpredictabililty and dangerous properties.`,
                `They have been known to combust into flames when`,
                `being dissected or even deactivated, and they carry`,
                `dangerous high levels of radioactive particles.`,
                `Due to this and other reasons, it has been highly`,
                `speculated they were created and biological weapons`,
                `of war, although this has not been proven.`,
                ``,
                `Coil-heads' visual appearance is that of a bloody`,
                `mannequin with its head connected by a spring.`,
                `Their defining behavioral characteristic is to stop`,
                `when being looked at. However, this does not appear`,
                `to be a hard-and-fast rule. When they encounter a`,
                `loud or bright light they sometimes appear to enter`,
                `a long reset mode.`,
                `Just stare at htem or use a stun grenade! - Sigurd`,
                ``
            ])
        } else if (
            input.includes("snare")
            || input.includes("flea")
        ) {
            setDisplay([
                `SNARE FLEA`,
                ``,
                `Sigurd's danger level: 30%`,
                ``,
                `Scientific name: Dolus-scolopendra.`,
                `A very large arthropod of the class chilopoda. Its`,
                `body produces a silk with it primarily uses to`,
                `propel itself to places where it is concealed. Its`,
                `exoskeleton is somewhat fragile, and they can die`,
                `from long falls. The snare flea does not produce`,
                `venom, nor does it have a strong bite. It makes up`,
                `for this weakness with its ability to tighten`,
                `itself around large prey to suffocate.`,
                ``,
                `The snare flea thrives in dark, warm areas. It`,
                `cannot survive low temperatures and generally`,
                `avoids open air and sunlight take the rats outside`,
                `or just beat the hell otu of them! i think their`,
                `insides could make a good milkshake,,`,
                ``
            ])
        } else if (
            input.includes("eye")
            || input.includes("dog")
        ) {
            setDisplay([
                `EYELESS DOG`,
                ``,
                `Scientific name: Leo caecus`,
                `A large mammal of the class Saeptivus. They are`,
                `social, hunting in very large packs. They have also`,
                `been called "breathing lions" for their`,
                `recognizable sound and large mouths. They are`,
                `endurance hunters and attempt to make up for their`,
                `lack of sight with their sense of hearing. It's a`,
                `popular myth that they often mistake the sounds of`,
                `their own kind for prey, entering fights within`,
                `their own packs.`,
                ``,
                `Their behaviour is unique from other pack animals`,
                `in their tendency to spread out far to cover`,
                `distance. When an eyeless dog has found prey, it`,
                `roars to alert others in the near vicinity, who`,
                `will also sound the alarm, sometimes resulting in a`,
                `kind of chain reaction. Eyeless dogs can be`,
                `dangerous in swarms. However, they are`,
                `characteristically clumsy, taking guesses at their`,
                `prey's exact location which are often incorrect.`,
                ``
            ])
        } else if (
            input.includes("spore")
            || input.includes("liz")
        ) {
            setDisplay([
                `Spore lizards`,
                ``,
                `Sigurd's danger level: i ,dont know probabily 5% i`,
                `just hate this pudgy legged little sh it`,
                ``,
                `Scientific name: Lacerta-glomerorum`,
                `Colloquially named puffers or spore lizards,`,
                `Lacerta-glomerorum (of the family Alligatoridae) is`,
                `one of the largeset and heaviest reptiles. Despite`,
                `their large mouths, they are herbivores and do not`,
                `have a strong bite. The bulbs on their tails are`,
                `believed to secrete a chemical which attracts and`,
                `accelerates the growth of the fungues species`,
                `Lycoperdon perlatum, which it can then shake to`,
                `release spores as a defense mechanism--an unique`,
                `example of a mutualistic symbiotic relationship.`,
                ``,
                `Sopre lizards have a very timid temperment, tending`,
                `to avoid all confrontation if possible. If their`,
                `attempts at threat display are not effective, they`,
                `may attempt to attack, so it's not recommended to`,
                `corner or chase one. There are historical records`,
                `that spore lizards were at least partially`,
                `domesticated hundreds of years ago, however this`,
                `effort was set aside by an initiative to harvest`,
                `their tails for their medicinal properties.`,
                ``
            ])
        } else if (
            input.includes("forest keeper")
            || input.includes("forest")
            || input.includes("keeper")
        ){
            setDisplay([
                `FOREST KEEPER`,
                ``,
                `Sigurd's danger level: 50%`,
                ``,
                `Scientific name: Satyrid-proceritas`,
                `Believed to share a common ancestor with rapax-`,
                `folium, these behemoths are called Forest Keepers`,
                `for the biomes they often inhabit. Their bodies`,
                `bare markings on their front and back which mimic`,
                `eyes--this trait is more helpful in their youth, as`,
                `they are not agile. Their skin is a unique, dense`,
                `material which hardens further throughout their`,
                `lives; the large spikes and bumps across their`,
                `bodies form as a result of aging.`,
                ``,
                `It's been said Forest Keepers exhibit a curious`,
                `behavior similar to that of a human child the age`,
                `of 5 or 6. They will eat antyhing they find`,
                `fascinating. Forest Keepers don't actually need to`,
                `put anything into their mouths, and it's theorized`,
                `their main source of energy is a process similar to`,
                `photosynthesis. Still, this makes them relatively`,
                `dangerous to observe. They can see across long`,
                `distances, so staying low and making use of cover`,
                `is a must. They cannot enter small spaces and are`,
                `not generally destructive, so stay close to shelter`,
                `or overhangs.`,
                ``
            ])
        } else if (
            input.includes("jester")
            || input.includes("jes")
        ){
            setDisplay([
                `JESTER`,
                ``,
                `Sigurd's danger level: 90% Get out o fthere before`,
                `it goes APE!! You cant hide from it, just evacuate`,
                ``,
                `Scientific name: INSANEUS THINGUS`,
                `THERE'S NO FREACKING SCIENTIFC RECORD! good luck,`,
                `you know as much as us. we just call it the jester`,
                ``
            ])
        } else {
            setDisplay([
                `[This action was not compatible with this object.]`,
                ``
            ])
        }
    } else if (input.includes("view")) {
        if ( input.includes("first")) {
            setDisplay([
                `Date: August 22, 1968`,
                `Hello. i am writing this log to keep myself sane. I`,
                `couldnt find a way to do the most basic thing on`,
                `this old janky butt computer so i had Desmond add`,
                `it in, the log feature. til now ive just been`,
                `adding my own notes to the bestiary whatever i`,
                `know. My brother said i should keep a journal so im`,
                `doing what i can! I am writing in a proffessional`,
                `manner, as these logs could become a historical`,
                `record, as they will projbably be here for years,`,
                `just as long as there isnt a clean wipe. that is`,
                `what desmond saidfd`,
                ``,
                ``,
                `If you are reading it in the future, you are`,
                `probably from a nother crew. The turnover rate here`,
                `is enormous, maybe cause this job sucks and every`,
                `one turns over dead! Maybe I can give some help`,
                `when I have some expirience. End log.`,
                `Oh, our names are: Sigurd (me), Richard, Desmond,`,
                `Jess.`,
                ``
            ])
        } else if (input.includes("screams")) {
            setDisplay([
                `date: September 13, 1968`,
                ``,
                `for some reason i was the one who had to call the`,
                `company number to report the acciddent. they were`,
                `too scared to do it. It was the same fake voice i`,
                `remember from the interview on the phone at home`,
                `and the stupid training videos. but it heard what i`,
                `said i think, cause it said they would contact the`,
                `family and find a replacement and something e lse.`,
                `It talked so fast.`,
                ``,
                ``,
                `I learned you can hear the screams all the time in`,
                `the walkie talkie when you;re  at the wall of the`,
                `Company building. they didnt believe me, well now`,
                `they do. It sounds just like when i heard it a`,
                `couple weeks ago. They want to quit. I said I'm not`,
                `a coward. I just got this job`,
                ``
            ])
        } else if (input.includes("smells")) {
            setDisplay([
                `gosh, this suit is squeezing me like I'm a gosh`,
                `damn mummy! im a grown man, give it some space`,
                `between the legs! it's killing me i'm dying! i hope`,
                `youre happy dad, I FINALLY got a job. screw you!`,
                `Everyone here smells. especially Rich. I'm going to`,
                `throw him in the lake. I don't care what it's made`,
                `of. i love being on camera duty. oh`,
                `i forgot the date it's August 24, 1968. this`,
                `keyboard has dsadjilfasqt..f/g;`,
                ``,
                ``,
                `today we found a couple frying pans and a big nail.`,
                `Worth almost nothing. what is the company even`,
                `using it for`,
                ``
            ])
        } else if (input.includes("sound")) {
            setDisplay([
                `i got woken up early this morning because we were`,
                `goign to the company building to sell our useless`,
                `garbage. The rate was 120% which Desmond says is`,
                `rare and he didnt want to miss it, hes been`,
                `watching it like the stupid stocks`,
                ``,
                `it still stucks here, Rich still smells like a piece`,
                `of hsit .i can barely sleep. i heard the wrorst`,
                `sound behind the wall of the company building, it`,
                `sounded like crying red faces all churned up and`,
                `swept away by concrete, like the pestle and bowl my`,
                `mom crushes up her seeds and speces in. i still`,
                `hear it. Its a nightmare. no one else heard it.`,
                `they dont know what to do. Jess thinks i;m "home`,
                `sick," no im sick of this cheap suit`,
                `date: September 4, 1968`
            ])
        } else {
            setDisplay([
                `[DATA CORRUPTED OR OVERWRITTEN]`,
                ``
            ])
        }
    } else if (input.includes("buy")) {
        setDisplay([
            `You could not afford these items!`,
            `Your balance is ▪️0.`,
            ``
        ])
    } else if (input.includes("route")) {
        if (
            input.includes("exp")
            || input.includes("ass")
            || input.includes("vow")
            || input.includes("off")
            || input.includes("mar")
            || input.includes("ren")
            || input.includes("din")
            || input.includes("tit")
        ) {
            setDisplay([
                `Unable to route the ship currently. It must be in`,
                `orbit around a moon to route the autopilot`,
                `Use the main lever at the front desk to enter`,
                `orbit.`,
                ``,
                ``
            ])
        } else {
            setDisplay([
                `[There was no action supplied with the word.]`,
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
            `* The Company Building   //   Buying at ${stats.company.percentage}%`,
            ``,
            `* Experimentation${stats.weather.experimentation ? ` (${stats.weather.experimentation})` : ``}`,
            `* Assurance${stats.weather.assurance ? ` (${stats.weather.assurance})` : ``}`,
            `* Vow${stats.weather.vow ? ` (${stats.weather.vow})` : ``}`,
            ``,
            `* Offense${stats.weather.offense ? ` (${stats.weather.offense})` : ``}`,
            `* March${stats.weather.march ? ` (${stats.weather.march})` : ``}`,
            ``,
            `* Rend${stats.weather.rend ? ` (${stats.weather.rend})` : ``}`,
            `* Dine${stats.weather.dine ? ` (${stats.weather.dine})` : ``}`,
            `* Titan${stats.weather.titan ? ` (${stats.weather.titan})` : ``}`,
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
            `Manticoils`,
            `Circuit bees`,
            `Bunker spiders`,
            `Brackens`,
            `Thumpers`,
            `Snare fleas`,
            `Hygroderes`,
            `Hoarding bugs`,
            `Eyeless dogs`,
            `Baboon hawks`,
            `Coil-heads`,
            `Forest Keeper`,
            `Jester`,
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
            `Other commands:`,
            ``,
            `There are no other commands`,
            ``
        ])
    } else if (input === `sigurd`) {
        setDisplay([
            `SIGURD'S LOG ENTRIES`,
            ``,
            `To read a log, use keyword "VIEW" before its name.`,
            `---------------------------------`,
            ``,
            ``,
            `First Log - Aug 22`,
            `Screams - Sep 13`,
            `Smells here! - Aug 24`,
            `Sound behind the wall - Sep 4`,
            ``,
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