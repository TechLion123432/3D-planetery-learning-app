#include <iostream>
#include <cmath>

const double G = 6.67430e-11;  // Gravitational constant
const double M = 1.989e30;  // Mass of the Sun (kg)

struct Planet {
    std::string name;
    double semiMajorAxis;  // in meters
    double eccentricity;
    double period;  // in seconds
};

double calculatePosition(double time, Planet p) {
    double meanAnomaly = (2 * M_PI / p.period) * time;
    double trueAnomaly = meanAnomaly + 2 * p.eccentricity * sin(meanAnomaly);
    return p.semiMajorAxis * (1 - p.eccentricity * cos(trueAnomaly));
}

int main() {
    Planet earth = {"Earth", 1.496e11, 0.0167, 365.25 * 24 * 3600};
    double time = 0;
    
    while (time < earth.period) {
        double pos = calculatePosition(time, earth);
        std::cout << earth.name << " Position: " << pos << " meters from Sun.\n";
        time += 86400;  // Increment by 1 day
    }

    return 0;
}
