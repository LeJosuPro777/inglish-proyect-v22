CREATE TABLE uno (
    id bigint primary key generated always as identity,
    body text,
    word_assigned text,
    correct_answer_id bigint
);

INSERT INTO uno (body, word_assigned, correct_answer_id) VALUES
('1. _________ name is Robert.', NULL, 10),
('2. They _________ from Spain', NULL, 8),
('3. _________ are you from?', NULL, 2),
('4. What do you do? I´m _________ student', NULL, 6),
('5. Peter _________ at seven o´clock', NULL, 9),
('6. _________ you like this DVD?', NULL, 5),
('7. We _________ live in a flat.', NULL, 7),
('8. Wednesday, Thursday, Friday, _________', NULL, 4),
('9. Does he _________ tennis?', NULL, 3),
('10. Have you _________ a car?', NULL, 1);

CREATE TABLE dos (
    id bigint primary key generated always as identity,
    body text,
    word_assigned text,
    correct_answer_id bigint
);

INSERT INTO dos (body, word_assigned, correct_answer_id) VALUES
('We don’t have _____ butter.', NULL, 9),
('1. _____ some money here', NULL, 6),
('3. We _____ got a garage.', NULL, 4),
('4. Those shoes are very _____.', NULL, 10),
('5. Have you got a pen?', NULL, 8),
('6. It is a busy, _____ city.', NULL, 2),
('7. They _____ at home yesterday.', NULL, 1),
('8. I _____ there for a long time.', NULL, 7),
('9. He didn’t _____ glasses', NULL, 5),
('10. The restaurant was _____ busy.', NULL, 3);

CREATE TABLE tres (
    id bigint primary key generated always as identity,
    body text,
    word_assigned text,
    correct_answer_id bigint
);

INSERT INTO tres (body, word_assigned, correct_answer_id) VALUES
('1. Do you like the red _____?', NULL, 3),
('2. He _____ to Brazil on business.', NULL, 5),
('3. Yesterday was the _____ of April', NULL, 9),
('4. She’s got _____ hair', NULL, 7),
('5. I _____ play football at the weekend', NULL, 10),
('6. I _____ in an armchair at the moment', NULL, 1),
('7. My brother is older _____ me', NULL, 6),
('8. Their car is _____ biggest on the road', NULL, 8),
('9. It’s the _____ interesting of his films.', NULL, 8),
('10. The phone’s ringing: _____ answer it.', NULL, 2);

CREATE TABLE cuatro (
    id bigint primary key generated always as identity,
    body text,
    word_assigned text,
    correct_answer_id bigint
);

INSERT INTO cuatro (body, word_assigned, correct_answer_id) VALUES
('1. Do you _____ classical or rock music?', NULL, 3),
('2. He has _____ breakfast.', NULL, 5),
('3. The _____ have seen it before', NULL, 9),
('4. I’ve never met an actor _____.', NULL, 7),
('5. _____ is very good exercise.', NULL, 10),
('6. Have you _____ been on a winter sports holiday?', NULL, 1),
('7. I can’t _____ another language.', NULL, 6),
('8. They _____ pay for the tickets.', NULL, 4),
('9. _____ old is their car?', NULL, 8),
('10. Are you _____ for one or two weeks?', NULL, 2);

CREATE TABLE cinco (
    id bigint primary key generated always as identity,
    body text,
    word_assigned text,
    correct_answer_id bigint
);

INSERT INTO cinco (body, word_assigned, correct_answer_id) VALUES
('1. Stephen _____ to visit his parents.', NULL, 6),
('2. I don’t _____ getting up early.', NULL, 3),
('3. We _____ like to see the mountains.', NULL, 9),
('4. They _____ ever check their emails.', NULL, 4),
('5. They won’t come, _____ they?', NULL, 1),
('6. He _____ know how to spell it.', NULL, 10),
('Carla _____ to the radio all morning.', NULL, 9),
('8. They _____ come to the cinema with us.', NULL, 2),
('9. I like this song. _____ do I', NULL, 7),
('10. We _____ them at eight o’clock.', NULL, 5);

CREATE TABLE seis (
    id bigint primary key generated always as identity,
    body text,
    word_assigned text,
    correct_answer_id bigint
);

INSERT INTO seis (body, word_assigned, correct_answer_id) VALUES
('1. They are going _____ in America next month.', NULL, 2),
('2. This is the cinema _____ we saw the film.', NULL, 7),
('3. Have you ever _____ in a jazz band?', NULL, 10),
('4. I’m _____ when I’m with you.', NULL, 9),
('5. This is _____ than I thought.', NULL, 1),
('6. Can you tell me the way _____?', NULL, 6),
('7. Do you know what _____?', NULL, 8),
('8. Were you _____ to open the door?', NULL, 3),
('9. Everybody _____ wear a seat belt in the car', NULL, 5),
('10. Tom has lived in this town _____ three years.', NULL, 4);

CREATE TABLE siete (
    id bigint primary key generated always as identity,
    body text,
    word_assigned text,
    correct_answer_id bigint
);
INSERT INTO siete (body, word_assigned, correct_answer_id) VALUES
('1. We _____ work in that factory.', NULL, 1),
('2. I think it _____ be sunny tomorrow.', NULL, 7),
('3. He _____ like his brother', NULL, 10),
('4. _____ does your boyfriend look like?', NULL, 9),
('5. I’ve got _____ many problems', NULL, 2),
('6. If we get up in time, _____ the train', NULL, 6),
('7. They _____ to go to France for a year', NULL, 8),
('8. I’m working _____ to pass my exam.', NULL, 3),
('9. I’m writing _____ ask you to explain.', NULL, 5),
('10. He said that most problems _____ by teenagers.', NULL, 4);

CREATE TABLE ocho (
    id bigint primary key generated always as identity,
    body text,
    word_assigned text,
    correct_answer_id bigint
);

INSERT INTO ocho (body, word_assigned, correct_answer_id) VALUES
('1. What _____ to do at the weekend?', NULL, 1),
('2. Football _____ in most countries.', NULL, 2),
('3. Who was _____ the door?', NULL, 3),
('4. We _____ lunch when you telephoned.', NULL, 4),
('5. Your work is _____ better.', NULL, 5),
('6. She could play the piano _____ she could walk.', NULL, 6),
('7. The train was cancelled, so we _____.', NULL, 7),
('8. The problem was _____ solved', NULL, 8),
('9. It was a difficult journey, but I _____ get home.', NULL, 9),
('10. We had not _____ heard the news.', NULL, 10);

CREATE TABLE nueve (
    id bigint primary key generated always as identity,
    body text,
    word_assigned text,
    correct_answer_id bigint
);

INSERT INTO nueve (body, word_assigned, correct_answer_id) VALUES
('1. We arrived at the station, but the bus _____ earlier.', NULL, 10),
('2. We can _____ walk or go by car.', NULL, 9),
('3. If I _____ enough money, I’d buy a new car.', NULL, 8),
('4. It _____ correctly', NULL, 7),
('5. The accident wouldn’t have happened if you had been more _____.', NULL, 6),
('6. It _____ be possible sometime in the future.', NULL, 5),
('7. Schools then _____ having more children in the class.', NULL, 4),
('8. We _____ to go to work at six in the morning', NULL, 3),
('9. They _____ an old photograph of the place', NULL, 2),
('10. I _____ I had been able to meet her.', NULL, 1);

CREATE TABLE diez (
    id bigint primary key generated always as identity,
    body text,
    word_assigned text,
    correct_answer_id bigint
);

INSERT INTO diez (body, word_assigned, correct_answer_id) VALUES
('1. We’ll have taken our exams _____ this time next month.', NULL, 2),
('2. I will do badly in my work, _____ try harder', NULL, 1),
('3. I _____ wasted my time when I was at university.', NULL, 6),
('4. This is going to be my chance to _____ any difficulties', NULL, 8),
('5. It was difficult at first, but I soon _____ it.', NULL, 10),
('6. How did you manage to cook _____ a good meal?', NULL, 3),
('7. The solution had been found, _____ we hadn’t realised it.', NULL, 9),
('8. She _____ what I had been doing for all that time.', NULL, 8),
('9. They _____ heard us coming, we were making a lot of noise', NULL, 7),
('10. He _____ to help me with the decorating.', NULL, 5);