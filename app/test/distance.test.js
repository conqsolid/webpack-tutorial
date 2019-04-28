import { expect } from 'chai';
import { distance, sortByDistance } from '../src/distance';

describe("distance", function () {
    it("calculates distance with the good ol' Pynthegorean Theorem", function () {
        let origin = { x: 0.0, y: 0.0 };
        let point = { x: 3.0, y: 4.0 };
        expect(distance(origin, point)).to.equal(5);
    });
});

describe("sortByDistance", function () {
    it("sortByDistance", function () {

        const farAway = "Far away";
        const nearBy = "Nearby";

        let places = [
            { name: farAway, x: 100, y: 50 },
            { name: nearBy, x: 20, y: 10 }
        ];

        let origin = { name: "Origin", x: 0, y: 0 };

        let sorted = sortByDistance(origin, places);

        expect(sorted[0].name).to.equal(nearBy);
        expect(sorted[1].name).to.equal(farAway);
    })
})