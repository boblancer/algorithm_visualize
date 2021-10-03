import argparse

#coor = 2D coorindate value
#val  = Scala walk value
def walk(coor, value):
    directional_vector = [(0, 1), (1, 0), (0, -1), (-1, 0)]

    delta = tuple( d * value for d in coor)
    new_coor = tuple(coor[0] + delta[0], coor[1] + delta[1])

    return new_coor

#degree = unit of angle in arc system
#turn_rate = amount of turn
def turn(degree, turn_rate):
    degree = (degree + turn_rate) % 360

def parseCommand(cmds):

    degree = 0
    coor = (0, 0)

    turn_cmd = {"R": 90, "L": -90}

    for i, c in enumerate(cmds):
        if c == "W":
            walk(coor, cmds[i + 1])

        elif turn_cmd[c]:
            degree = turn(degree, turn_cmd[c])
            


if __name__ == '__main__':
    # Instantiate the parser
    parser = argparse.ArgumentParser(description='Maqe bot')

    # Required positional argument
    parser.add_argument('pos_arg', type=str,
                        help='Bot\' command string')