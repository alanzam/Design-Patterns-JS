const expect = require('chai').expect;
import { Destination, GoogleMaps, avoidTolls, avoidHighway, avoidHighway_Tolls, defaultRoute } from '../src/behavioral/strategy/strategy_es6';



describe('strategy tests', () => {
    it('GoogleMaps Route', () => {
        const sanPeter = new Destination(0, 60);
        const googleMapsSlowRoute = new GoogleMaps(avoidHighway_Tolls, sanPeter);
        expect(googleMapsSlowRoute.getEstimateTime()).to.equal(3); //Hrs

        const googleMapsavoidHighway = new GoogleMaps(avoidHighway, sanPeter);
        expect(googleMapsavoidHighway.getEstimateTime()).to.equal(2.5); //Hrs

        const googleMapsavoidTolls = new GoogleMaps(avoidTolls, sanPeter);
        expect(googleMapsavoidTolls.getEstimateTime()).to.equal(1.5); //Hrs

        const googleMapsFastRoute = new GoogleMaps(defaultRoute, sanPeter);
        expect(googleMapsFastRoute.getEstimateTime()).to.equal(1); //Hrs

        const googleMapsFastestRoute = new GoogleMaps((dest) => dest.distance / 120, sanPeter);
        expect(googleMapsFastestRoute.getEstimateTime()).to.equal(0.5); //Hrs
    });
});
